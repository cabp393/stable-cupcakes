import { supabase } from '../lib/supabase'

async function insertProduct(product) {
  return supabase
    .from('product')
    .insert([product])
    .then(({ error }) => error)
}

export default insertProduct
