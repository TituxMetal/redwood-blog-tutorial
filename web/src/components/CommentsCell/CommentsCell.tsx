import type { CommentsQuery, CommentsQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import Comment from '../Comment/Comment'

export const QUERY: TypedDocumentNode<CommentsQuery, CommentsQueryVariables> = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className='text-center text-gray-400'>No comments yet</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  return (
    <div className='space-y-8'>
      {comments.map(item => (
        <Comment key={item.id} comment={item} />
      ))}
    </div>
  )
}
