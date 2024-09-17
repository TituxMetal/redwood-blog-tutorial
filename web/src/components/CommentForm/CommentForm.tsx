import { useState } from 'react'

import {
  Form,
  FormError,
  Label,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`

interface Props {
  postId: string
}

interface FormValues {
  name: string
  body: string
}

const CommentForm = ({ postId }: Props) => {
  const [hasPosted, setHasPosted] = useState(false)
  const [createComment, { loading, error }] = useMutation(CREATE_COMMENT_MUTATION, {
    onCompleted: () => {
      setHasPosted(true)
      toast.success('Thank you for your comment!')
    },
    refetchQueries: [CommentsQuery]
  })

  const onSubmit: SubmitHandler<FormValues> = async input => {
    createComment({ variables: { input: { ...input, postId } } })
  }

  return (
    <div className={hasPosted ? 'hidden' : ''}>
      <h3 className='text-lg font-light text-zinc-200'>Leave a comment</h3>
      <Form className='mt-4 flex w-full flex-col gap-4' onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName='font-semi-bold'
          wrapperClassName='bg-rose-900 text-rose-300 text-sm p-3 rounded-md'
        />
        <Label name='name' className='text-sm uppercase text-zinc-400'>
          Name
        </Label>
        <TextField
          name='name'
          validation={{ required: true }}
          className='rounded-md border border-zinc-700 bg-zinc-800 p-2 text-zinc-200'
        />
        <Label name='body' className='text-sm uppercase text-zinc-400'>
          Comment
        </Label>
        <TextAreaField
          rows={6}
          name='body'
          validation={{ required: true }}
          className='rounded-md border border-zinc-700 bg-zinc-800 p-2 text-zinc-200'
        />
        <Submit
          className='w-fit rounded bg-sky-500 px-3 py-2 text-sm font-semibold tracking-wide text-zinc-100 disabled:opacity-50'
          disabled={loading}
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
