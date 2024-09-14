// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      __typename: 'Articles' as const,
      id: 42
    },
    {
      __typename: 'Articles' as const,
      id: 43
    },
    {
      __typename: 'Articles' as const,
      id: 44
    }
  ]
})
