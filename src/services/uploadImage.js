import { supabaseStorage } from '../lib/constants'
import { supabase } from '../lib/supabase'

async function uploadImage(filePath, file) {
  return supabase.storage
    .from('products')
    .upload(filePath, file)
    .then(({ data }) => `${supabaseStorage}${data.path}`)
}

export default uploadImage
