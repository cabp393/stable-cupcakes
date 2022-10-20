import { supabase } from '../lib/supabase'

async function getProductList() {
  return supabase
    .from('product')
    .select('*')
    .order('created_at', { ascending: false })
    .then(({ data }) => data)
}

export default getProductList
