import type { CreateCommentMutation, CreateCommentMutationVariables } from 'types/graphql'

import CommentForm from './CommentForm'

export const generated = () => {
  mockGraphQLMutation<CreateCommentMutation, CreateCommentMutationVariables>(
    'CreateCommentMutation',
    (variables, { ctx }) => {
      const id = Math.floor(Math.random() * 1000).toString()
      ctx.delay(1000)

      return {
        createComment: {
          id,
          name: variables.input.name,
          body: variables.input.body,
          createdAt: new Date().toISOString()
        }
      }
    }
  )

  return <CommentForm postId='1' />
}

export default { title: 'Components/CommentForm' }
