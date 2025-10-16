
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjpljfomoqneroewgant.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcGxqZm9tb3FuZXJvZXdnYW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MTkwMTksImV4cCI6MjA3NTk5NTAxOX0.J2dARggWCWJHbL22iXTWQVKZf03yylrjF2QcyweKfHI"
export const supabase = createClient(supabaseUrl, supabaseKey)