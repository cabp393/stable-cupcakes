import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { supabaseStorage } from '../lib/constants'
import { useDataContext } from '../hooks/useDataContext'
import { Btn } from '../components/Btn'
import { Input } from '../components/Input'
import { TextArea } from '../components/TextArea'
import toast from 'react-hot-toast'
import useSession from '../hooks/useSession'
import insertProduct from '../services/insertProduct'

function CreateProduct() {
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [productUrl, setProductUrl] = useState(null)
  const [productData, setProductData] = useState({})
  const session = useSession()
  const navigate = useNavigate()
  const { setRefresh } = useDataContext()

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    setProductData({
      ...productData,
      [name]: value,
    })
  }

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

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    if (!productUrl) {
      toast.error('select product image')
      return
    }

    try {
      const error = await insertProduct({
        ...productData,
        img_url: productUrl,
        user_id: session.user.id,
      })
      if (error) throw error

      setRefresh(true)
      toast.success('product created')
      navigate(`/products/${productData.slug}`)
    } catch (error) {
      toast.error('error uploading product')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mt-20 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4" onSubmit={handleSubmit}>
        {productUrl ? (
          <img
            src={productUrl}
            className="rounded object-cover max-h-60 self-center"
          />
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

        <Input title="title" handler={handleInput} />
        <Input title="slug" handler={handleInput} />
        <TextArea title="prompt" handler={handleInput} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-3">
          <Input title="steps" handler={handleInput} />
          <Input title="sampler" handler={handleInput} />
          <Input title="cfg scale" handler={handleInput} />
          <Input title="seed" handler={handleInput} />
        </div>

        <Btn title={loading ? '...loading' : 'submit'} />
      </form>
    </section>
  )
}

export default CreateProduct
