import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import Article from 'src/components/Article/Article'

export const QUERY: TypedDocumentNode<FindArticleQuery, FindArticleQueryVariables> = gql`
  query FindArticleQuery($id: String!) {
    article: post(id: $id) {
      id
      body
      title
      updatedAt
      createdAt
      user {
        name
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  article
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  return <Article item={article} />
}
