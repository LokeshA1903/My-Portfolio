import React, { useState } from 'react';
import { HardDrive, Cpu, Server, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const iconMap = {
  HardDrive: HardDrive,
  Cpu: Cpu,
  Server: Server,
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#060a14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            Real-world enterprise network infrastructure projects, automated firmware update pipelines, private AI server setups, and high-availability clusters.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Server;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cyber-card p-6 rounded-2xl bg-[#081022]/90 border border-slate-800 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/80 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-[10px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Platform */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-sans mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mb-4">
                    Platform: <span className="text-slate-300">{project.platform}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 line-clamp-3 mb-6 font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 text-[10px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-900 text-[10px] font-mono">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Explore Architecture Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
