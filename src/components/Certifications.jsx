import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#060a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            Formal validation of expertise in enterprise firewall management, cyber threat architecture, and CCNA core routing & switching.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cyber-card p-6 rounded-2xl bg-[#091124]/90 border border-slate-800 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.badgeColor} text-white shadow-lg`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold tracking-wider">
                    ● {cert.status}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-sans mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs text-slate-400 font-mono mb-4">
                  Issuer: <span className="text-slate-200 font-semibold">{cert.issuer}</span>
                </div>

                {/* Validation Code Box */}
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-1 mb-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Validation ID:</span>
                    <span className="text-cyan-400 font-bold">{cert.validationId}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>Validity:</span>
                    <span>{cert.validity}</span>
                  </div>
                </div>

                {/* Covered Skills */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800 text-[11px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Badge
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
