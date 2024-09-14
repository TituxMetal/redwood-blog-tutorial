import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import { timeTag } from 'src/lib/formatters'

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
    <div className='mt-8 space-y-8'>
      {articles.map(item => (
        <article key={item.id} className='rounded-lg bg-zinc-700 p-6 text-zinc-100 shadow-md'>
          <header className='mb-4'>
            <h2 className='text-2xl font-bold text-sky-400'>{item.title}</h2>
          </header>
          <p>{item.body}</p>
          <div className='mt-4 flex flex-col text-sm text-zinc-300'>
            <span>Created at: {timeTag(item.createdAt)}</span>
            <span>Updated at: {timeTag(item.updatedAt)}</span>
          </div>
        </article>
      ))}
    </div>
  )
}
