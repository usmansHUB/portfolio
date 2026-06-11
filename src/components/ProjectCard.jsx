import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, image, featured, link, status } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="panel group flex h-full flex-col overflow-hidden transition-colors hover:border-accent/30"
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-foreground/10 bg-muted/40 md:h-56">
        {image ? (
          <>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </>
        ) : (
          <span className="font-display text-4xl uppercase text-foreground/10 transition-colors group-hover:text-accent/20">
            {title.slice(0, 2)}
          </span>
        )}
        {featured && (
          <span className="absolute right-4 top-4 z-20 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6 md:p-8">
        <h3 className="font-display text-xl uppercase tracking-wide transition-colors group-hover:text-accent md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4">
          {link ? (
            <a
              href={link}
              target={link.startsWith('http') ? '_blank' : undefined}
              rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-80"
            >
              Open Project
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : status ? (
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {status}
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
