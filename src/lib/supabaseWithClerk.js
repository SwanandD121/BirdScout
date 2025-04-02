// // src/lib/supabaseWithClerk.js
// import { createClient } from '@supabase/supabase-js'
// import { useAuth } from '@clerk/clerk-react'

// export const getSupabaseWithClerk = async () => {
//   const { getToken } = useAuth()
//   const supabaseAccessToken = await getToken({ template: 'supabase' })
  
//   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
//   const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  
//   return createClient(supabaseUrl, supabaseKey, {
//     global: {
//       headers: {
//         Authorization: `Bearer ${supabaseAccessToken}`,
//       },
//     },
//   })
// }