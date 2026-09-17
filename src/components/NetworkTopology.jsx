import React, { useState } from 'react';
import { Network, Shield, Server, Cpu, HardDrive, Wifi, Activity, CheckCircle } from 'lucide-react';

export default function NetworkTopology() {
  const [selectedNode, setSelectedNode] = useState(null);

  const nodes = [
    {
      id: 'fortigate',
      name: 'FortiGate Security Gateway',
      type: 'Firewall & SD-WAN',
      status: 'ONLINE',
      ip: '192.168.1.1',
      details: 'Active-Passive High Availability cluster, NAT rules, SSL-VPN gateway, IPsec VPN tunnels, and SD-WAN path steering.',
      icon: Shield,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/80',
      x: '50%',
      y: '20%'
    },
    {
      id: 'ad-server',
      name: 'Active Directory Domain Controller',
      type: 'Systems & Authentication',
      status: 'ONLINE',
      ip: '192.168.1.10',
      details: 'Managing 300+ user accounts, Group Policy Objects (GPO), DNS & DHCP services with Windows Failover Clustering.',
      icon: Server,
      color: 'border-blue-500 text-blue-400 bg-blue-950/80',
      x: '25%',
      y: '55%'
    },
    {
      id: 'llm-server',
      name: 'Private LLM AI Server',
      type: 'Local AI Infrastructure',
      status: 'ONLINE',
      ip: '192.168.1.50',
      details: 'Self-hosted Ollama & Open WebUI stack on Ubuntu Linux GPU server, serving up to 10 concurrent internal users with 100% data privacy.',
      icon: Cpu,
      color: 'border-purple-500 text-purple-400 bg-purple-950/80',
      x: '50%',
      y: '65%'
    },
    {
      id: 'ftp-server',
      name: 'Firmware Distribution Server',
      type: 'FTP / OpenSSL',
      status: 'ONLINE',
      ip: '192.168.1.20',
      details: 'vsftpd on Ubuntu configured with OpenSSL SSL/TLS certificates, distributing automated firmware updates to ~200 edge devices.',
      icon: HardDrive,
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/80',
      x: '75%',
      y: '55%'
    }
  ];

  return (
    <section id="topology" className="py-20 bg-[#080d1c] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Enterprise Infrastructure Topology
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            Visual model of the secure network architecture, SD-WAN tunnels, domain controllers, and edge deployment nodes. Click a node to inspect traffic & role.
          </p>
        </div>

        {/* Canvas / Topology Visualizer Card */}
        <div className="cyber-card rounded-2xl bg-[#040712] border border-cyan-500/30 p-6 md:p-10 relative overflow-hidden">
          
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Node Diagram Container */}
          <div className="relative h-[380px] w-full flex items-center justify-center">
            
            {/* SVG Connecting Cables / Pulse Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="20%" x2="25%" y2="55%" stroke="#00f2fe" strokeWidth="2" strokeDasharray="6,6" className="animate-pulse" opacity="0.6" />
              <line x1="50%" y1="20%" x2="50%" y2="65%" stroke="#00f2fe" strokeWidth="2" strokeDasharray="6,6" className="animate-pulse" opacity="0.6" />
              <line x1="50%" y1="20%" x2="75%" y2="55%" stroke="#00f2fe" strokeWidth="2" strokeDasharray="6,6" className="animate-pulse" opacity="0.6" />
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
              const IconComp = node.icon;
              const isSelected = selectedNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  style={{ left: node.x, top: node.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl border ${node.color} shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 flex flex-col items-center gap-2 group ${
                    isSelected ? 'ring-2 ring-cyan-400 scale-110 shadow-[0_0_30px_rgba(0,242,254,0.5)]' : ''
                  }`}
                >
                  <div className="relative">
                    <IconComp className="w-7 h-7 animate-pulse" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 animate-ping" />
                  </div>
                  <div className="text-center font-mono">
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 whitespace-nowrap">
                      {node.name}
                    </div>
                    <div className="text-[10px] text-slate-400">{node.ip}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Node Details Bar */}
          {selectedNode ? (
            <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 font-mono text-xs text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>{selectedNode.name}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                    {selectedNode.status}
                  </span>
                </div>
                <p className="text-slate-300 font-sans text-xs">{selectedNode.details}</p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs shrink-0"
              >
                Close Inspector
              </button>
            </div>
          ) : (
            <div className="mt-4 text-center font-mono text-xs text-slate-400 flex items-center justify-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>Click any node in the topology canvas to inspect telemetry & role configuration.</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
