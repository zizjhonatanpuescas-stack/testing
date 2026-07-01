const SUPABASE_URL = "https://qawaafuhxutblwirdbvq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhd2FhZnVoeHV0Ymx3aXJkYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNTc2ODksImV4cCI6MjA5NzgzMzY4OX0.i8B0dbC7Vt7v6iP5APy_XyqMCUX4LWQoGrHjevYjf8Q";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);