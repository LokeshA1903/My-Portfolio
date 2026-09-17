import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin, Award } from 'lucide-react';
import { experience, education, keyAchievements } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-[#060a14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Work Experience & Key Achievements
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            Hands-on enterprise network operations, firewall optimization, and SLA-driven technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-extrabold text-white font-sans flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Professional Experience</span>
            </h3>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="cyber-card p-6 md:p-8 rounded-2xl bg-[#091124]/90 border border-slate-800 space-y-6 relative"
              >
                {/* Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-xl font-bold text-white font-sans">{exp.role}</h4>
                    <div className="text-cyan-400 font-mono text-xs font-semibold">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements & Education */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Key Achievements Box */}
            <div className="cyber-card p-6 rounded-2xl bg-[#0a1329]/90 border border-cyan-500/30 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Key Operational Wins</span>
              </div>
              <div className="space-y-3 font-sans text-xs text-slate-300">
                {keyAchievements.map((ach, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono font-bold">✓</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Box */}
            <div className="cyber-card p-6 rounded-2xl bg-[#0a1329]/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Degree</span>
              </div>
              <div>
                <h4 className="font-bold text-white font-sans text-sm">{education.degree}</h4>
                <p className="text-xs text-slate-400 font-mono mt-1">{education.institution}</p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-semibold">
                  {education.graduationYear}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
