// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase URL and Anon key
const supabaseUrl = 'https://dgtdundstxpqlasenunm.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndGR1bmRzdHhwcWxhc2VudW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MjY4MTksImV4cCI6MjA0NDUwMjgxOX0.90DZ209doAU9ehfv7cHy7ahSkelRQcoRTHoAa8JpOsA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
