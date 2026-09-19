import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, ArrowRight, CornerDownLeft, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function TerminalHero() {
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    {
      cmd: 'lokesh --status',
      output: [
        '🟢 SYSTEM STATUS: ONLINE',
        `Role: ${personalInfo.title}`,
        'Experience: 2+ Years Enterprise Network Infrastructure',
        'Specialization: FortiGate Firewall | SD-WAN | IPsec VPN | Windows & Linux Admin',
        'Location: Thoothukudi, Tamil Nadu, India',
        'Type "help" or click any shortcut button below to run commands.'
      ]
    }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  const executeCommand = (cmdToRun) => {
    const cleanCmd = cmdToRun.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputLines = [];

    switch (cleanCmd) {
      case 'help':
        outputLines = [
          'AVAILABLE COMMANDS:',
          '  help           - List all commands',
          '  whoami         - View Lokesh profile summary',
          '  skills         - List technical skills & firewalls',
          '  certifications - Display Fortinet & CCNA credentials',
          '  projects       - Show engineering projects',
          '  contact        - Get email, phone & social handles',
          '  ping           - Run network connection ping test',
          '  clear          - Clear terminal window'
        ];
        break;
      case 'whoami':
        outputLines = [
          `USER: ${personalInfo.name}`,
          `ROLE: ${personalInfo.title}`,
          `BIO: ${personalInfo.summary}`
        ];
        break;
      case 'skills':
        outputLines = [
          '⚡ TECHNICAL SKILLS MATRIX:',
          '• Firewalls: FortiGate Firewall, Policy Mgmt, NAT, SSL-VPN, IPsec VPN, SD-WAN',
          '• Systems Admin: Active Directory, GPO, DNS/DHCP, Windows Server, Ubuntu Linux',
          '• Networking: D-Link Switches, VLAN Trunking, Subnetting, Traffic Monitoring',
          '• Emerging: AWS Cloud Networking, Local Offline LLMs (Ollama/Open WebUI)'
        ];
        break;
      case 'certifications':
        outputLines = [
          '📜 CREDENTIALS & CERTIFICATIONS:',
          '1. Fortinet Certified Associate (FCA) [ID: 3684511744LA]',
          '2. Fortinet Certified Fundamentals (FCF) [ID: 8542176905LA]',
          '3. Free CCNA 200-301 (Network Chuck / Coursera) [Cert ID: u7399670]'
        ];
        break;
      case 'projects':
        outputLines = [
          '🚀 PROJECTS:',
          '1. FTP Server Deployment for Edge Firmware Management (~200 edge devices)',
          '2. On-Premises Private LLM Deployment (Ollama + Open WebUI)',
          '3. Windows Server & High Availability Cluster (300+ AD Accounts)'
        ];
        break;
      case 'contact':
        outputLines = [
          `EMAIL:    ${personalInfo.email}`,
          `PHONE:    ${personalInfo.phone}`,
          `LINKEDIN: ${personalInfo.linkedin}`,
          `GITHUB:   ${personalInfo.github}`
        ];
        break;
      case 'ping':
        outputLines = [
          'PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.',
          '64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.4 ms',
          '64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=11.8 ms',
          '64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=12.1 ms',
          '--- 8.8.8.8 ping statistics ---',
          '3 packets transmitted, 3 received, 0% packet loss, time 2003ms',
          'rtt min/avg/max/mdev = 11.821/12.107/12.411/0.241 ms [NETWORK OPTIMAL]'
        ];
        break;
      case 'clear':
        setCommandHistory([]);
        setInputVal('');
        return;
      default:
        outputLines = [`Command not recognized: "${cleanCmd}". Type "help" for a list of available commands.`];
    }

    setCommandHistory((prev) => [...prev, { cmd: cleanCmd, output: outputLines }]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs shadow-lg shadow-cyan-950/50">
              <Shield className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>FORTINET CERTIFIED ASSOCIATE (FCA)</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none font-sans">
                LOKESH A
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-cyan-400 font-semibold flex items-center gap-2">
                <span className="text-emerald-400">&gt;</span> Network Engineer
              </p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              Specialized in enterprise network infrastructure, FortiGate firewall rules, SD-WAN, SSL/IPsec VPNs, Active Directory administration, and local server deployments.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">
                FortiGate Firewall
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">
                SD-WAN & VPNs
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">
                Active Directory
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">
                Ubuntu Linux
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold font-mono text-xs hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Lokesh_A_Network_Engineer_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 font-mono text-xs hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Interactive CLI Terminal */}
          <div className="lg:col-span-6">
            <div className="terminal-window rounded-xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#0b1329] px-4 py-3 border-b border-cyan-900/40 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>lokesh@net-ops:~</span>
                </div>
                <div className="text-[10px] text-cyan-400/70">bash</div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 h-[340px] overflow-y-auto space-y-3 bg-[#040711]/90">
                {commandHistory.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-emerald-400">lokesh@net-ops:~$</span>
                      <span className="text-slate-100 font-semibold">{item.cmd}</span>
                    </div>
                    <div className="pl-4 space-y-0.5 text-slate-300">
                      {item.output.map((line, lIdx) => (
                        <p key={lIdx} className={line.startsWith('🟢') ? 'text-emerald-400 font-bold' : line.startsWith('⚡') ? 'text-cyan-300 font-bold' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Input Prompt */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
                  <span className="text-emerald-400 font-bold">lokesh@net-ops:~$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="type 'help', 'skills', or 'ping'..."
                    className="flex-1 bg-transparent border-none outline-none text-cyan-300 font-mono text-xs placeholder-slate-600 focus:ring-0"
                  />
                  <button type="submit" aria-label="Run command" className="text-slate-500 hover:text-cyan-400">
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Quick Shortcuts */}
              <div className="bg-[#091124] px-4 py-2 border-t border-slate-800/80 flex flex-wrap gap-2 text-[10px] text-slate-400 select-none items-center">
                <span className="text-slate-500">Quick Run:</span>
                {['help', 'whoami', 'skills', 'certifications', 'projects', 'contact', 'ping', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-1 rounded bg-slate-800/90 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-500/50 border border-slate-700/60 transition-all font-mono"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
