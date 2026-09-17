import React, { useState } from 'react';
import { ShieldAlert, Server, Network, Cpu, Search, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.map(cat => {
    if (activeTab !== 'all' && cat.id !== activeTab) return null;
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;
    return { ...cat, skills: matchingSkills };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-[#080d1a] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl font-sans">
              Comprehensive technical proficiencies in enterprise security policies, domain administration, and cloud infrastructure.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FortiGate, VPN)..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-800/80 pb-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg border transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 font-semibold shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            [ All Categories ]
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                activeTab === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 font-semibold shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="cyber-card p-6 rounded-2xl bg-[#0a1224]/80 border border-slate-800 space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  {cat.id === 'firewall' && <ShieldAlert className="w-5 h-5" />}
                  {cat.id === 'sysadmin' && <Server className="w-5 h-5" />}
                  {cat.id === 'networking' && <Network className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-white font-sans text-base">{cat.name}</h3>
                  <p className="text-[11px] font-mono text-slate-400">{cat.skills.length} core competencies</p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-[11px] font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
