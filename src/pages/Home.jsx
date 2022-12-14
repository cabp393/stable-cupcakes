import { NavLink } from 'react-router-dom'

function Home() {
  const width = window.innerWidth
  const heroImg = width > 480 ? '/full.avif' : '/mobile.avif'

  return (
    <section className="flex flex-col">
      <img
        src={heroImg}
        alt="stable cupcake"
        className="absolute top-0 left-0 -z-10  w-full"
      />

      <div className="flex flex-col self-center mt-80 w-full md:max-w-lg lg:max-w-4xl lg:mt-60 px-4">
        <h1 className="text-6xl lg:text-9xl">stable</h1>
        <h1 className="text-6xl lg:text-9xl text-right">cupcakes</h1>
      </div>

      <NavLink
        to={'products'}
        className="bg-primary w-36 p-2 rounded-full self-center mt-10 text-center"
      >
        explore
      </NavLink>
    </section>
  )
}

export default Home
