import React from 'react';

/** Kaggle "K" mark. Not available in lucide, so it ships as a local path. */
const KaggleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.825 23.859c-.022.092-.117.141-.284.141h-3.139c-.187 0-.351-.082-.493-.248l-5.178-6.589-1.448 1.375v5.204c0 .164-.082.248-.242.248h-3.134c-.164 0-.243-.082-.243-.248v-23.23c0-.164.079-.248.243-.248h3.134c.164 0 .242.083.242.248v14.493l6.526-7.398c.156-.182.328-.277.516-.285h3.393c.18 0 .269.074.265.223-.005.059-.044.114-.117.168l-5.836 6.308 6.037 8.941c.088.132.127.215.117.248z"
      transform="scale(0.65) translate(6, 4)"
    />
  </svg>
);

export default KaggleIcon;
