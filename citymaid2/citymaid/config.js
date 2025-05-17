// Supabase configuration
const SUPABASE_URL = 'https://fdgqqxyyofjnkhswkwcq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZ3FxeHl5b2Zqbmtoc3drd2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMjQyMTMsImV4cCI6MjA1OTYwMDIxM30.YyJLLu3r2a7Mh7ny0ie-YzzLfPh5PdrJJHnBFBxWqVE';

// Initialize Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export the Supabase client
export { supabase };

// Admin configuration
const ADMIN_EMAILS = [
    'admin@citymaid.com',
    // Add more admin emails as needed
];

export { ADMIN_EMAILS };
