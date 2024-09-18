// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      id: '42',
      name: 'John Doe',
      body: 'This is a comment',
      postId: '1',
      createdAt: '2024-01-31T13:37:42Z'
    },
    {
      id: '43',
      name: 'Jane Doe',
      body: 'This is another comment',
      postId: '1',
      createdAt: '2024-08-18T13:37:42Z'
    },
    {
      id: '44',
      name: 'John Smith',
      body: 'This is a third comment',
      postId: '1',
      createdAt: '2024-04-27T13:37:42Z'
    }
  ]
})
