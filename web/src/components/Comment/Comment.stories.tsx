import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
  tags: ['autodocs']
}

export default meta

export const generated: StoryObj<typeof Comment> = {
  render: () => {
    return (
      <Comment
        comment={{
          name: 'John Doe',
          body: 'This is a comment',
          createdAt: '2024-02-14T13:37:42Z',
          id: '1',
          postId: '1'
        }}
      />
    )
  }
}

export const moderatorView: StoryObj<typeof Comment> = {
  render: () => {
    mockCurrentUser({ id: '1', email: 'moderator@example.com', roles: 'moderator' })

    return (
      <Comment
        comment={{
          name: 'John Doe',
          body: 'This is a comment',
          createdAt: '2024-02-14T13:37:42Z',
          id: '1',
          postId: '1'
        }}
      />
    )
  }
}
