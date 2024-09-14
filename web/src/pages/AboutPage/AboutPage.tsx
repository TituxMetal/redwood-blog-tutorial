import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="Redwood Blog |About" description="About page" />

      <p>
        This site was created to demonstrate my mastery of RedwoodJS: look on my
        works, ye mighty, and despair!
      </p>
      <Link to={routes.home()}> Return Home</Link>
    </>
  )
}

export default AboutPage
