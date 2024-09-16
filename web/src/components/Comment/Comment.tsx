import { formattedDate } from 'src/lib/formatters'

interface CommentProps {
  comment: {
    name: string
    body: string
    createdAt: string
  }
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className='rounded-md bg-sky-700 p-8 text-zinc-100'>
      <header className='flex flex-col justify-between md:flex-row'>
        <h2 className='text-xl font-bold md:text-2xl'>{comment.name}</h2>
        <time dateTime={comment.createdAt} className='text-xs text-zinc-300'>
          {formattedDate(comment.createdAt, true)}
        </time>
      </header>
      <p className='mt-2 text-base md:text-lg'>{comment.body}</p>
    </div>
  )
}

export default Comment
