import React from 'react';
import { X, CheckCircle2, Cpu, HardDrive, Server, ShieldCheck, Terminal } from 'lucide-react';

const iconMap = {
  HardDrive: HardDrive,
  Cpu: Cpu,
  Server: Server,
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const IconComponent = iconMap[project.icon] || Server;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#091124] border border-cyan-500/40 p-6 md:p-8 shadow-2xl shadow-cyan-950/50 space-y-6 text-slate-100 font-sans my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:border-cyan-400 border border-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/80">
            <IconComponent className="w-8 h-8" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs mb-1">
              <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                {project.category}
              </span>
              <span className="text-slate-400">• {project.platform}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Tagline Box */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center gap-3">
          <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{project.tagline}</span>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.highlights.map((h, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-center">
              <div className="font-mono text-xs font-bold text-emerald-400">{h}</div>
            </div>
          ))}
        </div>

        {/* Detailed Points */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono">
            Deployment Highlights & Architecture:
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <span className="text-xs font-mono text-slate-400 block">Technologies & Tools Used:</span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-400 transition-all"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
