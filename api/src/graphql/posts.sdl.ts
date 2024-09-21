export const schema = gql`
  type PostUser {
    id: String
    name: String
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Post {
    id: String!
    title: String!
    body: String!
    user: PostUser
    userId: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: String!): Post @skipAuth
  }
`
