import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header className='bg-sky-800 p-4 text-zinc-100'>
        <section className='container mx-auto flex items-center justify-between'>
          <h1 className='text-xl'>Redwood Blog</h1>
          <nav className='flex space-x-4'>
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.about()}>About</Link>
          </nav>
        </section>
      </header>
      <main className='container mx-auto'>{children}</main>
    </>
  )
}

export default BlogLayout
