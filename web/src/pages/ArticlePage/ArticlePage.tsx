import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: string
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <Metadata title='Article' description='Article page' />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
