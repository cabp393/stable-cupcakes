import { GitHubIcon } from './GitHubIcon'

export function Footer() {
  return (
    <footer className="w-full my-10 flex flex-col justify-center items-center">
      <p className="text-detail">2022</p>
      <a href="https://github.com/cabp393/stable-cupcakes">
        <GitHubIcon className="fill-detail" size={30} />
      </a>
    </footer>
  )
}
