import { render, screen } from '@redwoodjs/testing/web'

import CommentForm from './CommentForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentForm', () => {
  it('renders successfully', () => {
    render(<CommentForm postId='1' />)

    expect(screen.getByText('Leave a comment')).toBeInTheDocument()
  })
})
