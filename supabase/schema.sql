-- EXECUTIVE SEARCH OS Database Schema
-- Production Supabase SQL Definition with Row Level Security (RLS)

CREATE TABLE IF NOT EXISTS public.retained_mandates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_title TEXT NOT NULL,
    sector TEXT NOT NULL,
    scope_description TEXT NOT NULL,
    comp_band TEXT NOT NULL,
    timeline TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'ACTIVE CIM SPRINT',
    tags JSONB DEFAULT '[]'::jsonb,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.candidate_dossiers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_code TEXT NOT NULL,
    current_title TEXT NOT NULL,
    credentials TEXT NOT NULL,
    location TEXT NOT NULL,
    notice_period TEXT NOT NULL,
    non_compete_cleared BOOLEAN DEFAULT true,
    status TEXT NOT NULL DEFAULT 'VETTING COMPLETE',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.client_mandate_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sponsor_entity TEXT NOT NULL,
    target_role TEXT NOT NULL,
    partner_email TEXT NOT NULL,
    revenue_scale TEXT NOT NULL,
    nda_sent BOOLEAN DEFAULT true,
    status TEXT NOT NULL DEFAULT 'NEW SUBMISSION',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.retained_mandates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidate_dossiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_mandate_inquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for active retained mandates
CREATE POLICY "Public read mandates" ON public.retained_mandates
    FOR SELECT USING (true);

-- Public insert for client mandate inquiries
CREATE POLICY "Public insert inquiries" ON public.client_mandate_inquiries
    FOR INSERT WITH CHECK (true);

-- Authenticated administrative access
CREATE POLICY "Admin full access mandates" ON public.retained_mandates
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access candidates" ON public.candidate_dossiers
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access inquiries" ON public.client_mandate_inquiries
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
