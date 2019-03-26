export default `
    type User {
        id: String!
        firstName: String!
        lastName: String!
        email: String!
        phone: Int
        picture: String
        createAt: scalar Date
        updatedAt: scalar Date
    }

    type Query {
        user(id: ID!):User!
        users: [User!]!
    }

    type Mutation {
        createUser(user: CreateUserInput): User!
        updateUser(id:String!, user: UpdateUserInput): User!
        deleteUser(id: String!): User!
    }

    input CreateUserInput {
        id: String!
        firstName: String!
        lastName: String!
        email: String!
        phone: Int
        picture: String
        createAt: scalar Date
    }

    input UpdateUserInput {
        firstName: String
        lastName: String
        email: String
        phone: Int
        picture: String
        updatedAt: scalar Date
    }
    `;