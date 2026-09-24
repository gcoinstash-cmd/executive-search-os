import React, { useState } from 'react';
import { 
  Users, Shield, Award, Briefcase, FileCheck, ArrowRight, 
  Calendar, DollarSign, Lock, Building2, ChevronRight, Check, 
  CheckCircle2, Sparkles, Plus, BarChart3, Database, Search,
  Compass, UserCheck, TrendingUp, Cpu
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface SearchMandate {
  id: string;
  role: string;
  sector: string;
  scope: string;
  compBand: string;
  timeline: string;
  status: string;
  tags: string[];
  image: string;
}

const MANDATES: SearchMandate[] = [
  {
    id: 's1',
    role: 'Chief Executive Officer (CEO)',
    sector: 'ENTERPRISE AI & INFRASTRUCTURE SAAS',
    scope: 'Series C through IPO scale • $150M+ Contracted Pipeline • 400+ Global Headcount',
    compBand: '$750k Base + 4.0% Equity Allocation',
    timeline: '24-Day Shortlist Window',
    status: 'CONFIDENTIAL // FINAL 3',
    tags: ['PE-Backed', 'IPO Track', 'Global Multi-Region', 'Delaware C-Corp'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    role: 'Chief Financial Officer (CFO)',
    sector: 'SPECIALTY LIFE SCIENCES & HEALTHCARE ROLLUP',
    scope: 'Complex Capital Markets & Debt Facilities • Multi-Site SEC Reporting & Audit Gate',
    compBand: '$550k Base + LTIP & Carried Interest',
    timeline: '18-Day Shortlist Window',
    status: 'ACTIVE CANDIDATE DOSSIERS',
    tags: ['Public Co / SPAC Exits', 'Capital Markets', 'Audit Committee Lead', 'Boston / NYC'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    role: 'Independent Audit Committee Chair',
    sector: 'GLOBAL FINTECH & ASSET MANAGEMENT CONGLOMERATE',
    scope: 'Fiduciary Board Oversight • Sarbanes-Oxley & SEC Compliance • Risk Committee Direction',
    compBand: '$190,000 Board Annual Retainer + Equity Grants',
    timeline: 'Governance Review Complete',
    status: 'FINAL NOMINATING VOTE',
    tags: ['NYSE / NASDAQ Listed', 'SEC Financial Expert', 'Board Governance', 'Institutional AUM'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedMandate, setSelectedMandate] = useState<SearchMandate | null>(null);
  const [mandateRole, setMandateRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [aumTier, setAumTier] = useState('$50M - $250M ARR');
  const [submitted, setSubmitted] = useState(false);

  // Check URL route for /admin
  React.useEffect(() => {
    if (window.location.pathname.includes('/admin') || window.location.hash.includes('admin')) {
      setIsAdminOpen(true);
    }
  }, []);

  const handleSubmitEngagement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCompanyName('');
      setContactEmail('');
      setMandateRole('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Top Header / Nav */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-black font-extrabold shadow-lg shadow-emerald-500/20">
              <Users className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">SOVEREIGN SEARCH PARTNERS</span>
              <h1 className="text-lg font-bold tracking-tight text-white leading-none">EXECUTIVE SEARCH OS</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <a href="#mandates" className="hover:text-emerald-400 transition">Retained Mandates</a>
            <a href="#methodology" className="hover:text-emerald-400 transition">Search Architecture</a>
            <a href="#dossier" className="hover:text-emerald-400 transition">Talent Vault</a>
            <a href="#initiate" className="hover:text-emerald-400 transition">Commission Search</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-mono uppercase tracking-wider transition flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>[ PARTNER PASS ]</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RETAINED C-SUITE & BOARD GOVERNANCE OS • PRODUCTION GRADE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Architecting the Leadership of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Category-Defining Enterprises</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Autonomous executive search orchestration. High-stakes CEO succession, private equity portfolio team assembly, and independent board governance desks.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#initiate"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-sm transition shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <span>Initiate Retained Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium rounded-xl text-sm transition flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Partner Command Center</span>
            </button>
          </div>

          {/* Quick Metrics HUD */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>PLACEMENTS</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">420+ Leaders</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Fortune 500 & PE Tier-1</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>TIME TO SHORTLIST</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">21 Days</p>
              <p className="text-[11px] text-emerald-400 mt-0.5">Guaranteed Retained SLA</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>TENURE RATIO</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">98.2%</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">36-Month C-Suite Retention</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>TOTAL COMP PLACED</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">$2.4 Billion</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Base + LTIP + Equity Pools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Retained Search Mandates */}
      <section id="mandates" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">ACTIVE SEARCH PIPELINE</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Current Retained Engagements</h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Strictly confidential searches conducted under non-disclosure governance. Qualified candidates may submit dossiers for partner review.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              3 ACTIVE CIM SPRINT CYCLES
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MANDATES.map((mandate) => (
            <div 
              key={mandate.id} 
              className="bg-[#121214] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={mandate.image} 
                  alt={mandate.role}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/50 to-transparent"></div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700 text-[10px] font-mono font-bold text-emerald-400">
                  {mandate.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">{mandate.sector}</span>
                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">{mandate.role}</h4>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{mandate.scope}</p>

                  <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Compensation:</span>
                      <span className="font-semibold text-emerald-400">{mandate.compBand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Timeline:</span>
                      <span className="font-semibold text-zinc-300">{mandate.timeline}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {mandate.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] text-zinc-400 border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <button 
                    onClick={() => setSelectedMandate(mandate)}
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-emerald-500/50 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>Request Confidential Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Retained Search Architecture / Methodology */}
      <section id="methodology" className="py-20 px-6 bg-[#0E0E10] border-y border-zinc-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">SEARCH ARCHITECTURE</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">The 4-Stage Executive Placement Engine</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Our retained protocol replaces fragmented recruitment with an institutional, data-driven algorithm built for board-level execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-emerald-400">01</span>
                <h4 className="text-lg font-bold text-white mt-3">Mandate Calibration</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Deep-dive board interviews, corporate governance benchmarking, compensation equity structure, and anti-poach non-compete perimeter definitions.
                </p>
              </div>
              <span className="mt-6 text-[10px] font-mono text-zinc-500">TIMELINE: DAYS 1 - 5</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-emerald-400">02</span>
                <h4 className="text-lg font-bold text-white mt-3">Discrete Market Mapping</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Confidential talent scraping across 100% of qualified target entities. Partner-to-partner outreach ensuring zero reputational market leaks.
                </p>
              </div>
              <span className="mt-6 text-[10px] font-mono text-zinc-500">TIMELINE: DAYS 6 - 15</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-emerald-400">03</span>
                <h4 className="text-lg font-bold text-white mt-3">360° Forensic Diligence</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Proprietary leadership scorecards, verified backchannel references, forensic SEC/FINRA background scrutiny, and executive psychometrics.
                </p>
              </div>
              <span className="mt-6 text-[10px] font-mono text-zinc-500">TIMELINE: DAYS 16 - 21</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-emerald-400">04</span>
                <h4 className="text-lg font-bold text-white mt-3">Offer Close & Onboarding</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Complex compensation negotiations (cliff schedules, double-trigger severance, tax-efficient rollover equity) and 100-day board integration.
                </p>
              </div>
              <span className="mt-6 text-[10px] font-mono text-emerald-400">PLACED WITH 36-MO GUARANTEE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Vault / Candidate Dossier Desk */}
      <section id="dossier" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">VETTED TALENT NETWORK</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Executive Candidate Dossier Vault</h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Pre-calibrated C-Suite and Board-ready executives subjected to forensic 360° background vetting, compensation benchmarks, and psychometric profiles.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded-lg transition"
            >
              ACCESS TALENT REPOSITORY [ search2026 ]
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-emerald-500/40 transition">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">CFO POOL // NASDAQ / NYSE</span>
            <h4 className="text-lg font-bold text-white mt-3">Public Enterprise CFOs</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Vetted financial chiefs with dual capital markets experience, $500M+ debt syndication history, and Sarbanes-Oxley audit leadership.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex justify-between">
              <span>Average Comp: $650k Base + Equity</span>
              <span className="text-emerald-400">18 Candidates Active</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-emerald-500/40 transition">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">CTO / CPO // AI INFRASTRUCTURE</span>
            <h4 className="text-lg font-bold text-white mt-3">Engineering & Product Scale VPs</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Technical founders and SVPs who have scaled engineering teams from 50 to 800+ across high-throughput distributed systems and generative AI.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex justify-between">
              <span>Average Comp: $700k Base + Carry</span>
              <span className="text-emerald-400">24 Candidates Active</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-emerald-500/40 transition">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">BOARD GOVERNANCE</span>
            <h4 className="text-lg font-bold text-white mt-3">Independent Audit & Risk Chairs</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Former Fortune 200 C-Suite leaders qualified as SEC Financial Experts under Sarbanes-Oxley Section 407 for independent board committee chairs.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex justify-between">
              <span>Annual Retainer: $175k - $225k</span>
              <span className="text-emerald-400">12 Candidates Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Retained Mandate Initiation Form */}
      <section id="initiate" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
        <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">COMMISSION A SEARCH</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Initiate a Retained Executive Mandate</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Confidential consultation with a senior managing partner. Strict NDA executed before mandate disclosure.
            </p>
          </div>

          <form onSubmit={handleSubmitEngagement} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Company / Sponsor Entity</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Strategic Holdings"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Target Executive Role</label>
                <input
                  type="text"
                  required
                  value={mandateRole}
                  onChange={(e) => setMandateRole(e.target.value)}
                  placeholder="e.g. CEO, CFO, Managing Director"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Partner / Executive Email</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="partner@sponsorfirm.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Firm Scale / Revenue Tier</label>
                <select
                  value={aumTier}
                  onChange={(e) => setAumTier(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                >
                  <option>$20M - $50M ARR (Growth Stage)</option>
                  <option>$50M - $250M ARR (Middle Market)</option>
                  <option>$250M+ ARR (Enterprise / PE Platform)</option>
                  <option>Public Company / Large Cap Governance</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Submit Confidential Mandate Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Mandate received. Managing Partner will dispatch encrypted mutual NDA within 2 business hours.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Confidential Brief Modal */}
      {selectedMandate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121214] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-zinc-100 relative">
            <h4 className="text-xl font-bold text-white">{selectedMandate.role}</h4>
            <p className="text-xs text-emerald-400 font-mono mt-1">{selectedMandate.sector}</p>
            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">{selectedMandate.scope}</p>

            <div className="my-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">Target Compensation:</span>
                <span className="text-emerald-400 font-bold">{selectedMandate.compBand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Diligence Window:</span>
                <span className="text-zinc-300 font-semibold">{selectedMandate.timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Status:</span>
                <span className="text-amber-400 font-semibold">{selectedMandate.status}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500 mb-6">
              Complete candidate profile and board presentation deck requires an executed Sovereign Non-Disclosure Agreement.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert("Encrypted NDA dispatched to partner review desk.");
                  setSelectedMandate(null);
                }}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-xs transition"
              >
                Sign Electronic NDA
              </button>
              <button
                onClick={() => setSelectedMandate(null)}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800/80 bg-[#0A0A0B] text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-black font-black">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide">EXECUTIVE SEARCH OS</p>
              <p className="text-[11px] text-zinc-500">Retained C-Suite & Board Advisory Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-emerald-400 hover:underline font-mono"
            >
              Partner Door (Cheat Code: search2026)
            </button>
            <span>•</span>
            <span>Supabase RLS Ready</span>
            <span>•</span>
            <span>Ghost Factory™ Tier-1 Asset</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
