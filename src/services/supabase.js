import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dfgahbdqwzmuknpizgyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZ2FoYmRxd3ptdWtucGl6Z3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNDAwNzAsImV4cCI6MjAxMzYxNjA3MH0.-ZnunbqDz8pbEnU_Z2HO5aRS29PnFjkfpT4z9zRqGBs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
