import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import Logo from './Logo';
import { portfolioData } from '../data/portfolioData';
import { SocialFlipButton } from '@/components/ui/social-flip-button';

const Footer = () => {
  const { socials, email } = portfolioData.profile;
  const year = new Date().getFullYear();

  const contactItems = [
    { letter: "C", icon: <FaGithub />, label: "GitHub", href: socials.github },
    { letter: "O", icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com" },
    { letter: "N", icon: <FaLinkedin />, label: "LinkedIn", href: socials.linkedin },
    { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
    { letter: "A", icon: <FaFacebook />, label: "Facebook", href: "https://facebook.com" },
    { letter: "C", icon: <FaEnvelope />, label: "Email", href: `mailto:${email}` },
    { letter: "T", icon: <FaDiscord />, label: "Discord", href: "https://discord.com" },
  ];

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
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <SocialFlipButton items={contactItems} className="p-0 scale-90 md:scale-100 origin-center md:origin-right" />
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
