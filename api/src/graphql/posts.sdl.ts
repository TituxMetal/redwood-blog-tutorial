export const schema = gql`
  type Post {
    id: String!
    title: String!
    body: String!
    user: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: String!): Post @skipAuth
  }
`
