import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header className='bg-sky-800 p-4 text-zinc-100'>
        <section className='container mx-auto flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-sky-200'>
            <Link to={routes.home()} className='hover:text-sky-100'>
              Redwood Blog
            </Link>
          </h1>
          <nav className='flex space-x-4'>
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.about()}>About</Link>
            <Link to={routes.contact()}>Contact</Link>
          </nav>
        </section>
      </header>
      <main className='container mx-auto'>{children}</main>
    </>
  )
}

export default BlogLayout
