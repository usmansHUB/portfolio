import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Database, Quote } from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostgresql,
  SiFastapi,
  SiPython,
  SiFirebase,
  SiAndroidstudio,
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { portfolioData } from '../data/portfolioData';
import PageTransition from '../components/PageTransition';

const SKILL_ICONS = {
  SiJavascript,
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  DiMsqlServer,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostgresql,
  SiFastapi,
  SiPython,
  SiFirebase,
  SiAndroidstudio,
};

const ROLE_ICONS = {
  fullstack: <Globe className="h-7 w-7 text-accent" />,
  frontend: <Smartphone className="h-7 w-7 text-accent" />,
  backend: <Database className="h-7 w-7 text-accent" />,
};

const getIconComponent = (iconName) => SKILL_ICONS[iconName];

const Home = () => {
  const { profile, roles, skillCategories } = portfolioData;
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  const containerStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.45 } },
  };
  const lineReveal = {
    hidden: { y: '110%' },
    show: { y: '0%', transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 1.3, ease: 'easeOut' } },
  };

  return (
    <PageTransition>
      <div className="pb-16 pt-24 md:pt-28">
        <section className="relative px-6 md:px-12">
          <motion.div variants={containerStagger} initial="hidden" animate="show" className="relative pt-4 md:pt-8">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>

            <div className="relative overflow-hidden leading-[0.82]">
              <motion.h1
                variants={lineReveal}
                className="font-display whitespace-nowrap text-[clamp(2rem,8.2vw,12rem)] uppercase tracking-[-0.03em]"
              >
                {profile.name.toUpperCase()}
              </motion.h1>
            </div>

            <div className="relative my-6 grid grid-cols-12 items-center gap-4 md:my-10">
              <motion.div variants={fadeUp} className="col-span-12 md:col-span-6">
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  I&apos;m a <span className="font-semibold text-accent">{profile.title}</span> building
                  full-stack apps with MongoDB, Express, React, and Node.js from{' '}
                  <span className="text-foreground">{profile.location}</span>.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="col-span-12 text-right md:col-span-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Currently</div>
                <div className="mt-1 font-display text-2xl uppercase leading-tight">
                  Building <span className="text-accent">interfaces</span>
                </div>
              </motion.div>
            </div>

            <div className="relative overflow-hidden leading-[0.82]">
              <motion.h1
                variants={lineReveal}
                className="text-stroke font-display whitespace-nowrap text-left text-[clamp(2rem,8.6vw,12rem)] uppercase tracking-[-0.03em]"
              >
                {profile.title.toUpperCase()}
              </motion.h1>
            </div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent/30 bg-accent/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20"
              >
                View Work <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-foreground/15 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-accent/30 hover:text-accent"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="border-t border-foreground/10 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="panel p-8 text-center md:p-12 lg:p-16"
            >
              <p className="text-lg font-medium italic leading-relaxed text-muted-foreground md:text-2xl lg:text-3xl">
                &ldquo;I transform complex ideas into functional realities using the{' '}
                <span className="font-bold text-accent not-italic">maintainable code</span> and{' '}
                <span className="font-bold text-foreground not-italic">intuitive interfaces</span> that users love.&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-foreground/10 py-12">
          <div className="relative overflow-hidden border-y border-foreground/10 py-5">
            <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap">
              {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => {
                const IconComponent = getIconComponent(skill.icon);

                return (
                  <span
                    key={`${skill.name}-${i}`}
                    className="flex items-center gap-4 rounded-full border border-foreground/10 bg-background/70 px-6 py-3 text-sm font-semibold uppercase tracking-wider shadow-sm md:px-8 md:py-4 md:text-base"
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-muted/60 md:h-9 md:w-9"
                      style={{ color: skill.color }}
                    >
                      {IconComponent ? <IconComponent size={16} /> : <span className="text-[10px] font-bold">{skill.letter ?? skill.name[0]}</span>}
                    </span>
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {roles.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="panel group p-8 transition-colors hover:border-accent/25"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-muted/50 transition-colors group-hover:border-accent/30">
                  {ROLE_ICONS[role.id] ?? ROLE_ICONS.fullstack}
                </div>
                <h3 className="mb-4 font-display text-lg uppercase tracking-widest md:text-xl">{role.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-foreground/10 px-6 py-24 md:px-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="panel relative flex flex-col items-center overflow-hidden p-8 text-center md:p-16 lg:p-20"
            >
              <Quote className="absolute left-6 top-6 h-16 w-16 text-accent/10 md:left-10 md:top-10 md:h-20 md:w-20" />
              <Quote className="absolute bottom-6 right-6 h-16 w-16 rotate-180 text-accent/10 md:bottom-10 md:right-10 md:h-20 md:w-20" />
              <p className="relative z-10 max-w-3xl font-display text-2xl uppercase leading-tight md:text-4xl lg:text-5xl">
                &ldquo;Simplicity is the soul of <span className="text-accent">efficiency</span>.&rdquo;
              </p>
              <div className="relative z-10 mt-10 flex items-center gap-6">
                <div className="h-px w-12 bg-accent/30" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground md:text-base">Austin Freeman</p>
                <div className="h-px w-12 bg-accent/30" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
