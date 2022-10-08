import { createClient } from '@supabase/supabase-js'
import { supabaseUrl, supabaseAnonKey } from './constants.js'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
