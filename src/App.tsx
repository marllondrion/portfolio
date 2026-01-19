import React from 'react';
import { useApp } from './AppContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Journey } from './components/sections/Journey';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CardGridSection } from './components/sections/CardGridSection';

const App: React.FC = () => {
  const { data } = useApp();

  if (!data) return null;

  return (
    <div className="snap-container bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500 relative">
      <div className="fixed inset-0 grid-pattern dark:text-white text-slate-900 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"></div>

      <Navbar />

      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Journey data={data.experience} />
        <Skills data={data.skills} />

        {/* EDUCATION (CardGridSection) */}
        <CardGridSection
          id="education"
          bgTitle="ACADEMIA"
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