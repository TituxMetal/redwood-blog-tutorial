import { render, screen, within } from '@redwoodjs/testing/web'

import Article from './Article'

const ARTICLE = {
  id: '1',
  title: 'First Post',
  body: 'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}

describe('Article', () => {
  it('renders a blog article without the summary props', () => {
    render(<Article item={ARTICLE} />)

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
  })

  it('renders a blog article with the summary props to false', () => {
    render(<Article item={ARTICLE} summary={false} />)

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
  })

  it('renders a summary of the blog post', () => {
    render(<Article item={ARTICLE} summary={true} />)

    const truncatedBody = ARTICLE.body.slice(0, 10)
    const matchedBody = screen.getByText(truncatedBody, { exact: false })
    const ellipsis = within(matchedBody).getByText('...', { exact: false })

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(screen.queryByText(ARTICLE.body)).not.toBeInTheDocument()
    expect(matchedBody).toBeInTheDocument()
    expect(ellipsis).toBeInTheDocument()
  })
})
