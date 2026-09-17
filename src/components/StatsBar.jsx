import React from 'react';
import { ShieldCheck, Server, Users, CheckCircle2 } from 'lucide-react';
import { stats } from '../data/portfolioData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Server: Server,
  Users: Users,
  CheckCircle2: CheckCircle2,
};

export default function StatsBar() {
  return (
    <section className="py-8 bg-[#080e1c] border-y border-cyan-900/30 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="cyber-card p-5 rounded-xl border border-slate-800/80 bg-slate-900/60 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-all pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 group-hover:border-cyan-400 group-hover:scale-110 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </span>
                </div>
                
                <div className="font-sans font-semibold text-xs text-slate-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
