import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
