import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase


// import { createClient } from '@supabase/supabase-js'
//
// const supabaseUrl = 'https://nrbxbmapsmrxsfgyzskv.supabase.co'
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
//
// const supabase = createClient(supabaseUrl, supabaseAnonKey)
//
// export default supabase