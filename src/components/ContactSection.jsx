import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ShieldCheck, CheckCircle2, Download, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#080d1a] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Initiate Contact Signal
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-sans">
            Open for full-time Network Engineering, Cybersecurity, and Systems Administration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Terminal Live Packet Status */}
            <div className="terminal-window p-4 rounded-xl font-mono text-xs space-y-2">
              <div className="text-emerald-400 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>ROUTE TELEMETRY // ONLINE</span>
              </div>
              <div className="text-slate-300 space-y-0.5">
                <p>&gt; Host: lokesh@sec-ops</p>
                <p>&gt; Target: lokesha5004@gmail.com</p>
                <p className="text-cyan-400">&gt; Status: Accepting incoming connection packets</p>
              </div>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="cyber-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 group hover:border-cyan-500/50"
              >
                <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/80 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 font-mono">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="cyber-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 group hover:border-cyan-500/50"
              >
                <div className="p-3 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 font-mono">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              <div className="cyber-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-950 text-purple-400 border border-purple-800/80">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Location</div>
                  <div className="text-sm font-bold text-white font-mono">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 font-mono text-xs pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 flex items-center justify-center gap-2 transition-all font-semibold"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 flex items-center justify-center gap-2 transition-all font-semibold"
              >
                <Github className="w-4 h-4 text-slate-100" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Download CV CTA */}
            <a
              href={personalInfo.resumePath}
              download="Lokesh_A_Network_Engineer_CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-mono font-extrabold text-xs hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD OFFICIAL CV (PDF)</span>
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="cyber-card p-6 md:p-8 rounded-2xl bg-[#0a1224]/90 border border-cyan-500/30 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white font-sans">Send Transmission</h3>
                <span className="text-xs font-mono text-cyan-400">SSL ENCRYPTED</span>
              </div>

              {status === 'sent' ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3 font-mono">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Transmission Delivered!</h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                    Thank you for connecting! Your message packet has been routed successfully. I will respond to your email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-slate-400 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-slate-400 uppercase">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-slate-400 uppercase">Subject / Opportunity</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Network Engineer Role / Security Consulting"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-slate-400 uppercase">Message Packet *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <span>Encapsulating & Routing Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE PACKET</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
