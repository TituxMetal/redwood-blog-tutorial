import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title='Redwood Blog' description='Redwood Blog' />

      <ArticlesCell />
    </>
  )
}

export default HomePage
