import { Link } from 'react-router-dom';
import Logo from './Logo';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { socials, email } = portfolioData.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10 px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 text-center md:flex-row md:items-end md:text-left">
        <div className="flex max-w-sm flex-col items-center space-y-5 md:items-start">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <Logo className="h-10 w-10" />
            <span className="font-display text-2xl uppercase tracking-wide">
              Usman<span className="text-accent">.dev</span>
            </span>
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Full stack developer — building modern web apps.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-5 md:items-end">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest md:justify-end">
            <a href={socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              Github
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              Linkedin
            </a>
            <a href={`mailto:${email}`} className="transition-colors hover:text-accent">
              Email
            </a>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            &copy; {year} Muhammad Usman Safdar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
