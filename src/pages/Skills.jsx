import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import PageTransition from '../components/PageTransition';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';

const Skills = () => {
  const { skillCategories } = portfolioData;

  const getIconComponent = (iconName) => SiIcons[iconName] || DiIcons[iconName];

  const getSkillBadgeText = (skill) => {
    if (skill.letter?.trim()) return skill.letter.trim().toUpperCase();

    return skill.name
      .split(/\s+/)
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 3);
  };

  return (
    <PageTransition>
      <div className="relative overflow-hidden px-6 pb-24 pt-24 md:px-12 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">(03) Arsenal</p>
            <h1 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-6xl">Skills</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Core technologies and tools I use to build modern websites and applications.
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category) => (
              <section key={category.title}>
                <h2 className="mb-8 flex items-center gap-4 font-display text-xl uppercase tracking-widest md:text-2xl">
                  <span className="block h-px w-12 bg-accent/40" />
                  {category.title}
                </h2>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                  {category.skills.map((skill, i) => {
                    const IconComponent = getIconComponent(skill.icon);

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="panel group flex cursor-default flex-col items-center justify-center gap-3 p-5 transition-colors hover:border-accent/30 md:gap-4 md:p-6"
                      >
                        <div
                          className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-foreground/10 bg-muted/50 font-display text-center leading-none transition-transform group-hover:scale-110 md:h-16 md:w-16 ${
                            IconComponent ? 'text-2xl' : 'px-1 text-[0.62rem] font-semibold tracking-[0.16em] md:text-[0.72rem]'
                          }`}
                          style={{ color: skill.color }}
                        >
                          {IconComponent ? (
                            <IconComponent size={24} />
                          ) : (
                            getSkillBadgeText(skill)
                          )}
                        </div>
                        <span className="text-center text-sm font-semibold uppercase tracking-wider md:text-base">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
