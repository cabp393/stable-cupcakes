import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { supabaseStorage } from '../lib/constants'
import { IconDelete } from '../components/IconDelete'
import toast from 'react-hot-toast'

export function InputFile({ productUrl, setProductUrl }) {
  const [uploading, setUploading] = useState(false)

  const uploadProductImg = async e => {
    try {
      setUploading(true)

      if (!e.target.files || e.target.files.length === 0) {
        throw new error('You must select an image to upload.')
      }

      const file = e.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { data, error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const img_url = `${supabaseStorage}${data.path}`
      setProductUrl(img_url)
      toast.success('image uploaded')
    } catch (error) {
      toast.error('error uploading image')
      console.error(error)
    } finally {
      setUploading(false)
    }
  }
  return (
    <>
      {productUrl ? (
        <div className="flex justify-center relative">
          <IconDelete
            size={30}
            onClick={() => setProductUrl(null)}
            className="absolute right-[180px] -top-5 hover:cursor-pointer"
          />
          <img
            src={productUrl}
            className="rounded object-cover max-h-60 self-center"
          />
        </div>
      ) : (
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={uploadProductImg}
          disabled={uploading}
          className="max-w-[80vw] self-center file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-primary file:text-white hover:file:cursor-pointer"
        />
      )}
    </>
  )
}
