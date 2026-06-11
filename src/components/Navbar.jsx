import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 md:px-12">
      <nav className="mx-auto mt-4 flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-background/70 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mt-6 md:h-16 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] hover:opacity-90">
          <Logo className="h-8 w-8 md:h-9 md:w-9" />
          <span className="font-display text-lg uppercase tracking-wide md:text-xl">
            Usman<span className="text-accent">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-accent/12 text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
                  : 'text-muted-foreground hover:bg-white/4 hover:text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-foreground transition-all hover:border-accent/30 hover:text-accent md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%),rgba(8,10,16,0.96)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/4 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
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
                        : 'text-foreground hover:bg-white/6 hover:text-accent'
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
