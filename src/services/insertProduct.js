import { supabase } from '../lib/supabase'

async function insertProduct(product) {
  const { error } = await supabase.from('product').insert([product])

  return error
}

export default insertProduct
