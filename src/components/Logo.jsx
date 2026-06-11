const Logo = ({ className = 'h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
    {...props}
  >
    <defs>
      <linearGradient id="logo-u-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="0.55" stopColor="#a78bfa" />
        <stop offset="1" stopColor="#38bdf8" />
      </linearGradient>
      <linearGradient id="logo-frame-gradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" stopOpacity="0.9" />
        <stop offset="1" stopColor="#a78bfa" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path
      d="M24 4 L40 12 V36 L24 44 L8 36 V12 Z"
      stroke="url(#logo-frame-gradient)"
      strokeWidth="1.25"
      strokeLinejoin="round"
      fill="rgba(99, 102, 241, 0.06)"
    />
    <path
      d="M15 14 V27 C15 33.5 19 37 24 37 C29 37 33 33.5 33 27 V14"
      stroke="url(#logo-u-gradient)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="30" r="2" fill="#6366f1" />
  </svg>
);

export default Logo;
