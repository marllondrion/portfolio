import React from 'react';
import { useApp } from './AppContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CardGridSection } from './components/sections/CardGridSection';
import { CategoryGridSection } from './components/sections/CategoryGridSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { SplitTextSection } from './components/sections/SplitTextSection';

const App: React.FC = () => {
  const { data } = useApp();

  if (!data) return null;

  return (
    <div className="snap-container bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500 relative">
      <div className="fixed inset-0 grid-pattern dark:text-white text-slate-900 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"></div>

      <Navbar />

      <main>
        <Hero data={data.hero} />

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
            bullets: item.bullets
          }))}
        />


        {/* SKILLS (CategoryGridSection) */}
        <CategoryGridSection
          id="skills"
          title={data.skills.title}
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
            iconText: item.institution.charAt(0)
          }))} />


        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default App;