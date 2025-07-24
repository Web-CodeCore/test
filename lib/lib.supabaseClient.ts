import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qergvrxtdbdiksecsmru.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlcmd2cnh0ZGJkaWtzZWNzbXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzQ2MjQsImV4cCI6MjA2ODkxMDYyNH0.PViH__WRaq5Rp6o3UM_BsYZNss29bQI-EiZXMSMx5Ks'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
