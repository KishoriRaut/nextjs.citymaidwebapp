import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qplspaopnleojxquzbqw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbHNwYW9wbmxlb2p4cXV6YnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MzkyNTEsImV4cCI6MjA2NjMxNTI1MX0.XSdS2jy-SKrFrWJD1nsSUmLWcpTdVzvb3o-RWt3_QH8';

export const supabase = createClient(supabaseUrl, supabaseKey); 