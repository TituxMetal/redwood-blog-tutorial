import { adminPost, createPost, deletePost, updatePost } from './adminPosts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
  scenario('creates a post', async scenario => {
    mockCurrentUser({
      id: scenario.user.john.id,
      name: 'John Doe',
      email: 'john@doe.com',
      roles: 'admin'
    })
    const result = await createPost({
      input: { title: 'String', body: 'String', userId: scenario.user.john.id }
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.userId).toEqual(scenario.user.john.id)
  })

  scenario('updates a post', async scenario => {
    mockCurrentUser({
      id: scenario.user.john.id,
      name: 'John Doe',
      email: 'john@doe.com',
      roles: 'admin'
    })
    const original = await adminPost({ id: scenario.post.john.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'Updated Title' }
    })

    expect(result.title).toEqual('Updated Title')
  })

  scenario('deletes a post', async scenario => {
    mockCurrentUser({
      id: scenario.user.john.id,
      name: 'John Doe',
      email: 'john@doe.com',
      roles: 'admin'
    })
    const original = await deletePost({ id: scenario.post.john.id })
    const result = await adminPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
