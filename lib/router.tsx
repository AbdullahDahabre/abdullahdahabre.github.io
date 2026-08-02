import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Minimal History API router.
 *
 * The site is a static build on GitHub Pages with only a handful of routes, so a
 * full routing library would cost more than it gives. Direct visits to a deep
 * route are handled at build time by the `spa-html-fallbacks` plugin in
 * vite.config.ts, which emits a real document per route plus a 404.html
 * catch-all. Keep STATIC_ROUTES there in sync with the routes in App.tsx.
 */

interface RouterValue {
  path: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  /** True when the current entry was pushed by this app, so back() stays on the site. */
  canGoBack: boolean;
  back: () => void;
}

/** Marks history entries this app created, so we can tell them from a cold landing. */
const IN_APP_STATE = { inApp: true };
const isInApp = (): boolean => Boolean((window.history.state as { inApp?: boolean } | null)?.inApp);

const RouterContext = createContext<RouterValue | null>(null);

/**
 * Collapses the equivalent spellings of a route: "/projects/" and "/projects"
 * are the same page, and "/index.html" is the home page.
 */
const normalize = (pathname: string): string => {
  const trimmed = pathname.replace(/\/index\.html?$/i, '').replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(() => normalize(window.location.pathname));
  const [canGoBack, setCanGoBack] = useState(isInApp);

  useEffect(() => {
    const onPopState = () => {
      setPath(normalize(window.location.pathname));
      setCanGoBack(isInApp());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const [pathname = '/', hash] = to.split('#');
    const target = normalize(pathname || '/');

    // Re-navigating to the route we're already on shouldn't stack up history
    // entries that do nothing when the user presses Back.
    if (!hash && target === normalize(window.location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (options?.replace) {
      window.history.replaceState(window.history.state, '', to);
    } else {
      window.history.pushState(IN_APP_STATE, '', to);
      setCanGoBack(true);
    }
    setPath(target);

    // A hash target is scrolled into view by the route effect in App.tsx.
    // `instant` is required: <html> carries Tailwind's `scroll-smooth`, which
    // would otherwise animate the reset and make the new route appear to scroll
    // up into place instead of starting at the top.
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const back = useCallback(() => window.history.back(), []);

  const value = useMemo(() => ({ path, navigate, canGoBack, back }), [path, navigate, canGoBack, back]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = (): RouterValue => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used inside a <RouterProvider>');
  return context;
};

type LinkProps = { to: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * An anchor that routes client-side, while still being a real `<a href>` so it
 * can be middle-clicked, opened in a new tab, and crawled.
 */
export const Link: React.FC<LinkProps> = ({ to, onClick, children, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    // Let the browser handle new-tab / new-window / download intents.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
