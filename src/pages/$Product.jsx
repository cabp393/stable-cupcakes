import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
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

  if (!productDetails) return <h1>product not found</h1>

  return (
    <section>
      <ProductCard productDetails={productDetails} />
    </section>
  )
}

export default $Product
