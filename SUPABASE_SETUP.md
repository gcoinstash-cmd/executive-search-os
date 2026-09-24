# Executive Search OS — 3-Minute Turnkey Database Setup

Follow these 3 simple steps to connect your Executive Search OS to Supabase:

### 1. Create a Supabase Project
- Go to [supabase.com](https://supabase.com) and create a new project.
- Retrieve your **Project URL** and **Anon Public API Key** from Settings -> API.

### 2. Run SQL Schema and Seed
- In the Supabase dashboard, open the **SQL Editor**.
- Paste and execute `supabase/schema.sql`.
- (Optional) Paste and execute `supabase/seed.sql` to populate sample search mandates and talent dossiers.

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Run `npm run build` or `npm run dev` and your executive talent desk, retained candidate pipelines, and mandate inquiry forms will be fully live!
