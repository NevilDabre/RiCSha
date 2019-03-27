export default `
    type Rider {
        id: String!
        ride: [Ride!]
        user: [User!]
        seats: Int!
        notes: String
        status: String!
        createAt: scalar Date
        updatedAt: scalar Date
    }

    type Query {
        rider(id: ID!):Rider!
        riders: [Rider!]!
    }

    type Mutation {
        createRider(rider: CreateRiderInput): Rider!
        updateRider(id:String!, rider: UpdateRiderInput): Rider!
        deleteRider(id: String!): Rider!
    }

    input CreateRiderInput {
        id: String!
        ride: [Ride!]
        user: [User!]
        seats: Int!
        notes: String
        status: String!
        createAt: scalar Date
    }

    input UpdateRiderInput {
        ride: [Ride!]
        user: [User!]
        seats: Int!
        notes: String
        status: String!
        updatedAt: scalar Date
    }
    `;