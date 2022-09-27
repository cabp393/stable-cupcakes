import { Btn } from '../components/Btn'

function Home() {
  const HeroImg = () => {
    const width = window.innerWidth

    if (width > 480) {
      return (
        <img
          src="/full.png"
          alt="stable cupcake"
          className="absolute top-0 left-0 -z-10  w-full"
        />
      )
    } else {
      return (
        <img
          src="/mobile.png"
          alt="stable cupcake"
          className="absolute top-0 left-0 -z-10  w-full"
        />
      )
    }
  }

  return (
    <div className="flex flex-col">
      <HeroImg />
      <div className="flex flex-col self-center mt-36 w-full lg:max-w-3xl">
        <h1 className="text-6xl lg:text-9xl">stable</h1>
        <h1 className="text-6xl lg:text-9xl text-right">cupcakes</h1>
      </div>

      <Btn title="explore" />

      <h2>prompt</h2>
      <p className="text-content">
        lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
        consectetur eaque? Atque dolor aliquam ullam recusandae nam sit tempore
        eum molestiae dolorum asperiores odit id, tenetur, reprehenderit dolores
        repudiandae odio, itaque obcaecati. Facere incidunt at cumque blanditiis
        voluptate rerum? Neque non, soluta perferendis velit reiciendis
        consequuntur tenetur recusandae inventore labore hic alias minima
        doloribus maiores et eveniet a! Consequuntur, commodi in provident
        perferendis sed quia laborum porro omnis aspernatur maiores laboriosam
        iste labore aliquid suscipit necessitatibus explicabo ipsam consectetur,
        aliquam corporis quae tempore? Earum cumque commodi sed amet,
        voluptatibus, odit quo assumenda alias tenetur nostrum ea laboriosam
        harum. Explicabo, itaque.
      </p>
    </div>
  )
}

export default Home
