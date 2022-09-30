import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

function CreateProduct() {
  const [uploading, setUploading] = useState(false)
  const [productUrl, setProductUrl] = useState(null)
  const [productImg, setProductImg] = useState(null)

  useEffect(() => {
    if (productUrl) downloadImage(productUrl)
  }, [productUrl])

  const downloadImage = async path => {
    try {
      const { data, error } = await supabase.storage
        .from('products')
        .download(path)
      if (error) {
        toast.error(error)
      }
      const url = URL.createObjectURL(data)
      setProductImg(url)
    } catch (error) {
      toast.error('Error downloading image: ', error.message)
    }
  }

  const uploadProductImg = async event => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        toast.error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { data, error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file)

      setProductUrl(data.path)
      toast.success('Image uploaded')
      if (uploadError) {
        toast.error('Error uploading image: ', uploadError)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <section className="mt-20 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4">
        {productImg ? (
          <img src={productImg} />
        ) : (
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={uploadProductImg}
            disabled={uploading}
          />
        )}
      </form>
    </section>
  )
}

export default CreateProduct
