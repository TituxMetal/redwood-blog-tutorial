import type { Comment as IComment } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'
import { formattedDate } from 'src/lib/formatters'
interface CommentProps {
  comment: Pick<IComment, 'id' | 'name' | 'body' | 'postId' | 'createdAt'>
}

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: String!) {
    deleteComment(id: $id) {
      postId
    }
  }
`

const Comment = ({ comment }: CommentProps) => {
  const { hasRole } = useAuth()

  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    refetchQueries: [{ query: CommentsQuery, variables: { postId: comment.postId } }],
    onCompleted: () => {
      toast.success('Comment deleted')
    },
    onError: error => {
      toast.error(error.message)
    }
  })

  const moderate = () => {
    if (confirm('Are you sure?')) {
      deleteComment({ variables: { id: comment.id } })
    }
  }

  return (
    <div className='relative rounded-md bg-sky-700 p-8 text-zinc-100'>
      <header className='flex flex-col justify-between md:flex-row'>
        <h2 className='text-xl font-bold md:text-2xl'>{comment.name}</h2>
        <time dateTime={comment.createdAt} className='text-xs text-zinc-300'>
          {formattedDate(comment.createdAt, true)}
        </time>
      </header>
      <p className='mt-2 text-base md:text-lg'>{comment.body}</p>
      {hasRole('moderator') && (
        <button
          type='button'
          onClick={moderate}
          className='absolute bottom-2 right-2 rounded-md bg-rose-800 px-2 py-1 text-xs text-zinc-100'
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default Comment
