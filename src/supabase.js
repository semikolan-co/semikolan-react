
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zkghhoyvaapvtgbubgcj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprZ2hob3l2YWFwdnRnYnViZ2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ3NTgxMjksImV4cCI6MTk2MDMzNDEyOX0.qz0vXGmY_efFZk4zjQ5Y92I6c7AcJizLT3UMCZcoHOw'
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
