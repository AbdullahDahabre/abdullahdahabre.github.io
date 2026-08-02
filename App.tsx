import React, { useEffect, useRef } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';
import { useRouter } from './lib/router';

const renderRoute = (path: string): React.ReactNode => {
  switch (path) {
    case '/':
      return <Home />;
    case '/projects':
      return <Archive />;
    default:
      return <NotFound />;
  }
};

const App: React.FC = () => {
  const { path } = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  const lastPath = useRef(path);

  // Swapping the route subtree drops focus to <body>, which strands keyboard and
  // screen-reader users. Move it onto the new page instead.
  useEffect(() => {
    if (lastPath.current === path) return;
    lastPath.current = path;
    mainRef.current?.focus({ preventScroll: true });
  }, [path]);

  // Honours a `#section` in the URL (e.g. arriving at "/#contact", or coming
  // back to the home page from the archive via a nav link).
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const timers: number[] = [];
    let cancelled = false;

    const scrollToTarget = () => {
      if (cancelled) return;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Images above the target have no intrinsic size until they decode, so the
    // first scroll can land short. Re-aim as layout settles, unless the visitor
    // takes over scrolling themselves.
    const stopCorrecting = () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    const interrupts = ['wheel', 'touchstart', 'keydown'] as const;
    interrupts.forEach((type) => window.addEventListener(type, stopCorrecting, { passive: true }));

    const frame = requestAnimationFrame(() => {
      if (!document.getElementById(id)) return;
      scrollToTarget();
      timers.push(window.setTimeout(scrollToTarget, 250), window.setTimeout(scrollToTarget, 700));
      // Keep the address bar clean once we've acted on the hash, preserving the
      // entry's router state so canGoBack survives.
      window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname + window.location.search,
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      stopCorrecting();
      interrupts.forEach((type) => window.removeEventListener(type, stopCorrecting));
    };
  }, [path]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-neonCyan/30 selection:text-white">
      <Background />
      <Navbar />

      <main ref={mainRef} tabIndex={-1} className="flex flex-col gap-0 md:gap-10 outline-none">
        {renderRoute(path)}
      </main>

      <Footer />
    </div>
  );
};

export default App;
