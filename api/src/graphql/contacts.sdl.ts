export const schema = gql`
  type Contact {
    id: String!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: String!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  input DeleteContactInput {
    id: String!
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    deleteContact(id: String!): Contact! @requireAuth
  }
`
