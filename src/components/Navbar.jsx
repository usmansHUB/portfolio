import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { portfolioData } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const [prevPath, setPrevPath] = useState(location.pathname);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) {
      root.classList.add('overflow-hidden', 'h-screen');
      document.body.classList.add('overflow-hidden', 'h-screen');
    } else {
      root.classList.remove('overflow-hidden', 'h-screen');
      document.body.classList.remove('overflow-hidden', 'h-screen');
    }
    return () => {
      root.classList.remove('overflow-hidden', 'h-screen');
      document.body.classList.remove('overflow-hidden', 'h-screen');
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 md:px-12">
      <nav className="relative z-50 mx-auto mt-4 flex h-14 max-w-7xl items-center justify-between rounded-full border border-foreground/10 bg-background/70 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:mt-6 md:h-16 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] hover:opacity-90">
          <Logo className="h-8 w-8 md:h-9 md:w-9" />
          <span className="font-display text-lg uppercase tracking-wide md:text-xl">
            Usman<span className="text-accent">.dev</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-accent/12 text-accent shadow-[0_0_0_1px_var(--panel-border)]'
                    : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-all hover:scale-105 hover:border-accent/30 hover:text-accent cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-all hover:border-accent/30 hover:text-accent md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/96 backdrop-blur-2xl md:hidden"
          >
            <div className="panel flex flex-col items-center gap-5 p-8 bg-background/50 shadow-2xl">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`rounded-full px-4 py-2 font-display text-2xl uppercase tracking-[0.18em] transition-all ${
                      isActive(link.path)
                        ? 'bg-accent/12 text-accent'
                        : 'text-foreground hover:bg-foreground/5 hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              {portfolioData.profile.email}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
