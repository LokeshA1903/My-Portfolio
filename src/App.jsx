import React from 'react';
import Navbar from './components/Navbar';
import TerminalHero from './components/TerminalHero';
import StatsBar from './components/StatsBar';
import Certifications from './components/Certifications';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#060a14] min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />
      <main>
        <TerminalHero />
        <StatsBar />
        <Certifications />
        <SkillsMatrix />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
