
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
