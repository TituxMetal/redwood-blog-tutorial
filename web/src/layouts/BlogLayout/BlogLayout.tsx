import { Link, NavLink, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <Toaster />
      <header className='bg-sky-800 p-4 text-zinc-100'>
        <section className='container mx-auto flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-sky-200'>
            <Link to={routes.home()} className='hover:text-sky-100'>
              Redwood Blog
            </Link>
          </h1>
          <nav className='flex space-x-4 text-lg'>
            <NavLink
              to={routes.home()}
              activeClassName='text-sky-200'
              className='text-sky-300 hover:text-sky-400'
            >
              Home
            </NavLink>
            <NavLink
              to={routes.about()}
              activeClassName='text-sky-200'
              className='text-sky-300 hover:text-sky-400'
            >
              About
            </NavLink>
            <NavLink
              to={routes.contact()}
              activeClassName='text-sky-200'
              className='text-sky-300 hover:text-sky-400'
            >
              Contact
            </NavLink>
            {isAuthenticated ? (
              <button type='button' onClick={logOut} className='text-sky-300 hover:text-sky-400'>
                Logout
              </button>
            ) : (
              <Link to={routes.login()} className='text-sky-300 hover:text-sky-400'>
                Login
              </Link>
            )}
          </nav>
        </section>
      </header>
      <main className='container mx-auto'>{children}</main>
    </>
  )
}

export default BlogLayout
