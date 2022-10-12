import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../hooks/useDataContext'

function $Product() {
  const { productId } = useParams()
  const { productsList } = useDataContext()
  const [productDetails, setProductsDetails] = useState(null)

  useEffect(() => {
    if (!!productsList) {
      const aux = productsList.filter(p => p.slug === productId)
      setProductsDetails(aux[0])
    }
  }, [productsList])

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
              loading="lazy"
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
