import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Comment from './Comment'

const COMMENT = {
  name: 'John Doe',
  body: 'This is a comment',
  createdAt: '2024-02-14T13:37:42Z',
  id: '1',
  postId: '1'
}

describe('Comment', () => {
  it('renders successfully', () => {
    render(<Comment comment={COMMENT} />)

    expect(screen.getByText(COMMENT.name)).toBeInTheDocument()
    expect(screen.getByText(COMMENT.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('February 14, 2024 at 13:37')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', COMMENT.createdAt)
  })

  it('does not render a delete button if user is logged out', async () => {
    render(<Comment comment={COMMENT} />)

    expect(screen.queryByText('Delete')).not.toBeInTheDocument()
  })

  it('renders a delete button if user is a moderator', async () => {
    mockCurrentUser({ id: '1', email: 'moderator@example.com', roles: 'moderator' })

    render(<Comment comment={COMMENT} />)

    await waitFor(() => expect(screen.getByText('Delete')).toBeInTheDocument())
  })
})
