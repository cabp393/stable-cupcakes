import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../hooks/useDataContext'
import { Btn } from '../components/Btn'
import { Input } from '../components/Input'
import { TextArea } from '../components/TextArea'
import { InputFile } from '../components/InputFile'
import toast from 'react-hot-toast'
import useSession from '../hooks/useSession'
import insertProduct from '../services/insertProduct'

function CreateProduct() {
  const [loading, setLoading] = useState(false)
  const [productImage, setProductImage] = useState(null)
  const [productData, setProductData] = useState({})
  const { setRefresh } = useDataContext()
  const session = useSession()
  const navigate = useNavigate()

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    setProductData({
      ...productData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    if (!productImage) {
      toast.error('select product image')
      setLoading(false)
      return
    }

    try {
      const error = await insertProduct({
        ...productData,
        ...productImage,
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
        <InputFile
          productImage={productImage}
          setProductImage={setProductImage}
        />

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
