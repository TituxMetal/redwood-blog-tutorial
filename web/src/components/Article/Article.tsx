import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import CommentForm from '../CommentForm/CommentForm'

interface Props {
  item: Post
  summary?: boolean
}

const Article = ({ item, summary = false }: Props) => {
  const nameOrEmail = item.user?.name || item.user?.email

  return (
    <article key={item.id} className='mt-8 rounded-lg bg-zinc-700 p-6 text-zinc-100 shadow-md'>
      <header className='mb-4'>
        <h2 className='text-2xl font-bold'>
          <Link to={routes.article({ id: item.id })} className='text-sky-400 hover:text-sky-500'>
            {item.title}
          </Link>{' '}
        </h2>
        <p>
          By <span className='text-zinc-400'>{nameOrEmail}</span>
        </p>
      </header>
      <p>{summary ? truncate(item.body) : item.body}</p>
      <div className='mt-4 flex flex-col text-sm text-zinc-300'>
        <span>Created at: {timeTag(item.createdAt)}</span>
        <span>Updated at: {timeTag(item.updatedAt)}</span>
      </div>
      {!summary && (
        <div className='mt-12'>
          <CommentForm postId={item.id} />
          <div className='mt-12'>
            <CommentsCell postId={item.id} />
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
