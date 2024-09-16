import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { timeTag, truncate } from 'src/lib/formatters'

interface Props {
  item: Post
  summary?: boolean
}

const Article = ({ item, summary = false }: Props) => {
  return (
    <article key={item.id} className='mt-8 rounded-lg bg-zinc-700 p-6 text-zinc-100 shadow-md'>
      <header className='mb-4'>
        <h2 className='text-2xl font-bold text-sky-400'>
          <Link to={routes.article({ id: item.id })} className='hover:text-sky-500'>
            {item.title}
          </Link>
        </h2>
      </header>
      <p>{summary ? truncate(item.body) : item.body}</p>
      <div className='mt-4 flex flex-col text-sm text-zinc-300'>
        <span>Created at: {timeTag(item.createdAt)}</span>
        <span>Updated at: {timeTag(item.updatedAt)}</span>
      </div>
    </article>
  )
}

export default Article
