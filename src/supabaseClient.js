import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tolbueeicokrbiwykkfp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGJ1ZWVpY29rcmJpd3lra2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2ODUzMjIsImV4cCI6MjAwOTI2MTMyMn0.LaGHB2aQFVS42ht8ZBdTSop_N6Dqjats7W5093xCAo8';
export const supabase = createClient(supabaseUrl, supabaseKey);
