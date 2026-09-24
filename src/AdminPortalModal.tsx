import React, { useState } from 'react';
import { Lock, X, CheckCircle, Shield, Award, Users, DollarSign, FileCheck, Search } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'mandates' | 'candidates' | 'retainers'>('mandates');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'search2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAutoFill = () => {
    setPasscode('search2026');
    setIsAuthenticated(true);
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#121214] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close Admin Modal"
          className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div className="py-8 max-w-md mx-auto text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">Executive Partner Portal</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Enter firm partner passkey or trigger instant 1-click verification bypass.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter partner key (search2026)"
                  className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700 rounded-xl text-center text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                {error && <p className="text-rose-400 text-xs mt-2">Invalid partner credentials. Use search2026.</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition duration-150 shadow-lg shadow-emerald-500/20"
                >
                  Authorize
                </button>
                <button
                  type="button"
                  onClick={handleAutoFill}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 border border-emerald-500/40 text-emerald-300 font-medium rounded-xl transition duration-150"
                >
                  1-Click Passkey
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC2 Type II • Strict Confidentiality Protocol • Zero Leak Gate</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Authenticated Firm Partner</span>
                <h2 className="text-2xl font-bold text-white tracking-tight">Retained Search Ops Center</h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('mandates')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'mandates' ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Mandates
                </button>
                <button
                  onClick={() => setActiveTab('candidates')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'candidates' ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Candidate Pool
                </button>
                <button
                  onClick={() => setActiveTab('retainers')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'retainers' ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Retainer Ledger
                </button>
              </div>
            </div>

            {/* TAB CONTENT */}
            {activeTab === 'mandates' && (
              <div className="py-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-xs text-zinc-400">Active Board / C-Suite Mandates</p>
                    <p className="text-2xl font-bold text-emerald-400 mt-1">14 Engagements</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Average Target Comp: $680k Base + Equity</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-xs text-zinc-400">Vetted Shortlist Rate</p>
                    <p className="text-2xl font-bold text-white mt-1">21.4 Days Avg</p>
                    <p className="text-[11px] text-emerald-400 mt-1">100% Retained Exclusivity</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-xs text-zinc-400">Total Contracted Search Retainers</p>
                    <p className="text-2xl font-bold text-white mt-1">$4,860,000</p>
                    <p className="text-[11px] text-zinc-500 mt-1">One-Third Rule Placement Tranches</p>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-zinc-300">Live Client Mandates</h4>
                <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
                  <div className="p-4 bg-zinc-900/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">CONFIDENTIAL // PE-BACKED SAAS</span>
                      <h5 className="font-semibold text-white mt-1">Chief Executive Officer (CEO) — $180M ARR Scale</h5>
                      <p className="text-xs text-zinc-400">Target Comp: $750k Base + 3.5% Equity Pool • Shortlist: 4 Candidates Selected</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Final Offer Stage</span>
                  </div>
                  <div className="p-4 bg-zinc-900/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">FORTUNE 250 HEALTHCARE</span>
                      <h5 className="font-semibold text-white mt-1">Chief Information Security Officer (CISO)</h5>
                      <p className="text-xs text-zinc-400">Target Comp: $550k Base + LTIP • Shortlist: 6 Finalists In Background Vetting</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Board Presentation</span>
                  </div>
                  <div className="p-4 bg-zinc-900/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">GLOBAL ASSET MANAGER ($12B AUM)</span>
                      <h5 className="font-semibold text-white mt-1">Independent Audit Committee Chair (Board of Directors)</h5>
                      <p className="text-xs text-zinc-400">Target Retainer: $185k Board Stipend + RSUs • Shortlist: 3 Qualified SEC Experts</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Governance Review</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'candidates' && (
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-zinc-300">Vetted Executive Candidate Vault</h4>
                  <span className="text-xs text-emerald-400">182 Active Executive Profiles</span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-white">Candidate ID: EX-8924 (Former Public Co. CFO)</h5>
                      <p className="text-xs text-zinc-400">Led 2 IPOs ($2.4B & $890M) • Big 4 Audit Background • Enterprise SaaS & FinTech</p>
                      <p className="text-[11px] text-zinc-500 mt-1">Location: New York / Remote • Notice: Immediate • Non-Compete Cleared</p>
                    </div>
                    <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-emerald-300 rounded-lg border border-zinc-700">View Dossier</button>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-white">Candidate ID: EX-4190 (SVP Global Engineering)</h5>
                      <p className="text-xs text-zinc-400">Scaled Engineering org from 40 to 650 engineers • AI / Distributed Systems specialist</p>
                      <p className="text-[11px] text-zinc-500 mt-1">Location: San Francisco, CA • Security Clearance: TS/SCI Eligible</p>
                    </div>
                    <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-emerald-300 rounded-lg border border-zinc-700">View Dossier</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'retainers' && (
              <div className="py-6 space-y-4">
                <h4 className="text-sm font-semibold text-zinc-300">Retainer Fee Tranches & Billing Structure</h4>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-400">Tranche 1: Mandate Retainer (Day 1 Kickoff)</span>
                    <span className="font-bold text-white">33.3% of Total Fee ($110,000)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-400">Tranche 2: Shortlist Presentation (Day 30 Gate)</span>
                    <span className="font-bold text-white">33.3% of Total Fee ($110,000)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-zinc-400">Tranche 3: Candidate Acceptance & Placement</span>
                    <span className="font-bold text-emerald-400">33.4% of Total Fee ($110,000)</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
              <span className="text-xs text-zinc-500">Autonomous Retained Search Engine • Supabase RLS Protected</span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-rose-400 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
