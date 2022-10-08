import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import STORE_URL from '../utils/storeUrl'

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

      if (error) {
        throw error
      }
      if (data[0] === undefined) {
        return
      }

      setProductDetails(data[0])
    } catch (error) {
      console.error(error)
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
              src={`${STORE_URL}${productDetails.img_url}`}
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
