import { NavLink } from 'react-router-dom'
import useProductsList from '../hooks/useProductsList'

function Products() {
  const productsList = useProductsList()

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-5">
      {productsList?.map(product => {
        return (
          <NavLink to={product.slug} key={product.id}>
            <img
              src={product.img_url}
              alt={product.title}
              className="rounded"
            />
            <h2>{product.title}</h2>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Products
