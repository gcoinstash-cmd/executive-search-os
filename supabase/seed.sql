-- EXECUTIVE SEARCH OS Sample Seed Data

INSERT INTO public.retained_mandates (role_title, sector, scope_description, comp_band, timeline, status, tags, image_url)
VALUES
('Chief Executive Officer (CEO)', 'ENTERPRISE AI & INFRASTRUCTURE SAAS', 'Series C through IPO scale • $150M+ Contracted Pipeline • 400+ Global Headcount', '$750k Base + 4.0% Equity Allocation', '24-Day Shortlist Window', 'CONFIDENTIAL // FINAL 3', '["PE-Backed", "IPO Track", "Global Multi-Region", "Delaware C-Corp"]'::jsonb, 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'),
('Chief Financial Officer (CFO)', 'SPECIALTY LIFE SCIENCES & HEALTHCARE ROLLUP', 'Complex Capital Markets & Debt Facilities • Multi-Site SEC Reporting & Audit Gate', '$550k Base + LTIP & Carried Interest', '18-Day Shortlist Window', 'ACTIVE CANDIDATE DOSSIERS', '["Public Co / SPAC Exits", "Capital Markets", "Audit Committee Lead", "Boston / NYC"]'::jsonb, 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'),
('Independent Audit Committee Chair', 'GLOBAL FINTECH & ASSET MANAGEMENT CONGLOMERATE', 'Fiduciary Board Oversight • Sarbanes-Oxley & SEC Compliance • Risk Committee Direction', '$190,000 Board Annual Retainer + Equity Grants', 'Governance Review Complete', 'FINAL NOMINATING VOTE', '["NYSE / NASDAQ Listed", "SEC Financial Expert", "Board Governance", "Institutional AUM"]'::jsonb, 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80');

INSERT INTO public.candidate_dossiers (candidate_code, current_title, credentials, location, notice_period, non_compete_cleared, status)
VALUES
('EX-8924', 'Former Public Co. CFO', 'Led 2 IPOs ($2.4B & $890M) • Big 4 Audit Background • Enterprise SaaS & FinTech', 'New York, NY', 'Immediate', true, 'SHORTLISTED'),
('EX-4190', 'SVP Global Engineering', 'Scaled Engineering org from 40 to 650 engineers • Distributed Systems & AI', 'San Francisco, CA', '30 Days', true, 'SHORTLISTED'),
('EX-3312', 'Managing Director & Group Head', 'Wall Street Bulge Bracket M&A Lead • $14B Transaction History', 'London / New York', '60 Days', true, 'VETTING COMPLETE');
