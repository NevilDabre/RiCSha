export default `
    scalar Date
    type User {
        _id: String!
        firstName: String!
        lastName: String!
        email: String!
        phone: Int
        picture: String
        createAt: Date
        updatedAt: Date
    }

    type Query {
        user(_id: ID!):User!
        users: [User!]!
    }

    type Mutation {
        createUser(user: CreateUserInput): User!
        updateUser(_id:String!, user: UpdateUserInput): User!
        deleteUser(_id: String!): User!
    }

    input CreateUserInput {
        firstName: String!
        lastName: String!
        email: String!
        phone: Int
        picture: String
        createdAt: Date
    }

    input UpdateUserInput {
        firstName: String
        lastName: String
        email: String
        phone: Int
        picture: String
        updatedAt: Date

    }
    `;