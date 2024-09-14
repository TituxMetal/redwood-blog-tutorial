import { Link, routes } from '@redwoodjs/router'

import { timeTag } from 'src/lib/formatters'

const Article = ({ item }) => {
  return (
    <article key={item.id} className='mt-8 rounded-lg bg-zinc-700 p-6 text-zinc-100 shadow-md'>
      <header className='mb-4'>
        <h2 className='text-2xl font-bold text-sky-400'>
          <Link to={routes.article({ id: item.id })} className='hover:text-sky-500'>
            {item.title}
          </Link>
        </h2>
      </header>
      <p>{item.body}</p>
      <div className='mt-4 flex flex-col text-sm text-zinc-300'>
        <span>Created at: {timeTag(item.createdAt)}</span>
        <span>Updated at: {timeTag(item.updatedAt)}</span>
      </div>
    </article>
  )
}

export default Article
