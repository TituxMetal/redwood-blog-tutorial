import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import Article from 'src/components/Article/Article'

export const QUERY: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div className='text-center text-zinc-400'>Loading...</div>

export const Empty = () => <div className='text-center text-zinc-400'>No articles found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className='text-center text-red-400'>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      {articles.map(item => (
        <Article key={item.id} item={item} />
      ))}
    </>
  )
}
