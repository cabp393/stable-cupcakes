import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function $Product() {
  const { productId } = useParams()
  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
    getProducts(productId)
  }, [productId])

  async function getProducts(slug) {
    try {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .eq('slug', slug)
      if (error || data[0] === undefined) {
        throw error
      }

      const imgUrl = await downloadImage(data[0].img_url)
      data[0].img_url = imgUrl

      setProductDetails(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('products')
        .download(path)
      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)
      return url
    } catch (error) {
      toast.error('error downloading image: ', error.message)
    }
  }

  return (
    <div>
      {productDetails ? (
        <div className=" content-center w-full">
          <div className="text-5xl text-center my-5 md:my-10">
            {productDetails.title}
          </div>
          <div className="md:grid md:grid-cols-2 md:mt-7 md:gap-x-3">
            <img
              src={productDetails.img_url}
              alt={productDetails.title}
              className="rounded-[10px] py-5 justify-self-center md:py-0 md:max-w-full"
            />
            <div className="flex flex-col gap-5 md:max-w-lg">
              <div className="flex flex-col gap-1">
                prompt
                <span className="text-detail">{productDetails.prompt}</span>
              </div>
              <div className="flex justify-between">
                steps
                <span className="text-detail">{productDetails.steps}</span>
              </div>

              <div className="flex justify-between">
                sampler
                <span className="text-detail"> {productDetails.sampler}</span>
              </div>

              <div className="flex justify-between">
                cfg scale
                <span className="text-detail"> {productDetails.cfg_scale}</span>
              </div>

              <div className="flex justify-between">
                seed
                <span className="text-detail"> {productDetails.seed}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>product not found</h1>
      )}
    </div>
  )
}

export default $Product
