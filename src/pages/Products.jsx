import { NavLink } from 'react-router-dom'
import { IconAdd } from '../components/IconAdd'
import { useDataContext } from '../hooks/useDataContext'
import useSession from '../hooks/useSession'

function Products() {
  const { productsList } = useDataContext()
  const session = useSession()

  return (
    <section className="content-center w-full px-4">
      <div className="flex justify-around items-baseline my-7 md:my-10">
        <div className="w-[30px]"></div>
        <div className="text-5xl text-center">products</div>
        {session ? (
          <NavLink to={'/createproduct'}>
            <IconAdd className="fill-content" size={28} />
          </NavLink>
        ) : (
          <div className="w-[30px]"></div>
        )}
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-5">
        {productsList?.map(product => (
          <NavLink to={product.slug} key={product.id}>
            <img
              src={product.img_url}
              alt={product.title}
              height={product.img_height}
              width={product.img_width}
              className="rounded-2xl"
              loading="lazy"
            />
            <h2>{product.title}</h2>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Products
