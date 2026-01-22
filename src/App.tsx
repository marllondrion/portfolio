import React from 'react';
import { useApp } from './AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import {
  HeroSection,
  SplitTextSection,
  TimelineSection,
  CategoryGridSection,
  CardGridSection,
  CallToActionSection
} from './components/sections';

const App: React.FC = () => {
  const { data } = useApp();

  if (!data) return null;

  const skilledList = data.skills.categories.flatMap((c: any) =>
    [c.name, ...[...c.list].sort(() => Math.random() - 0.5)]
  );

  return (
    <div className="snap-container bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500 relative">
      <div className="fixed inset-0 grid-pattern dark:text-white text-slate-900 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"></div>

      <Navbar />

      <main>
        <HeroSection
          greeting={data.hero.greeting}
          name={data.hero.name}
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          ctaPrimary={{ label: data.hero.cta_primary, href: "#journey" }}
          ctaSecondary={{ label: data.hero.cta_secondary, href: "#contact" }}
          visualTitle={data.hero.bg_image_title}
          visualMaskText={skilledList.join(', ')}
        />

        {/* ABOUT (SplitTextSection) */}
        <SplitTextSection
          id="about"
          title={data.about.title}
          description={data.about.description}
          leftListTitle={data.about.achievements}
          leftList={data.about.achievements_list}
          rightListTitle={data.about.objectives}
          rightList={data.about.objectives_list}
        />

        {/* JOURNEY (TimelineSection) */}
        <TimelineSection
          id="journey"
          title={data.experience.title}
          subtitle={data.experience.subtitle}
          items={data.experience.items.map((item: any) => ({
            title: item.role,
            subtitle: item.company,
            link: item.website,
            tagLeft: item.period,
            tagRight: item.location,
            bullets: item.bullets,
            tags: item.tech
          }))}
        />

        {/* SKILLS (CategoryGridSection) */}
        <CategoryGridSection
          id="skills"
          title={data.skills.title}
          subtitle={data.skills.subtitle}
          categories={data.skills.categories}
        />

        {/* EDUCATION (CardGridSection) */}
        <CardGridSection
          id="education"
          bgTitle={data.education.title}
          items={data.education.items.map((item: any) => ({
            title: item.degree,
            subtitle: item.institution,
            tagLeft: item.period,
            tagRight: item.location,
            iconText: item.institution.charAt(0),
            logoImagePath: item.imagine_path
          }))} />


        <CallToActionSection
          id="contact"
          title={data.contact.title}
          subtitle={data.contact.subtitle}
          links={data.contact.links}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;