export default `
    scalar Date
    type Rider {
        _id: String!
        rideId: [Ride!]
        user: [User!]
        seats: Int!
        notes: String
        status: String!
        createAt: Date
        updatedAt: Date
    }

    type Query {
        rider(_id: ID!):Rider!
        riders: [Rider!]!
    }

    type Mutation {
        createRider(rider: CreateRiderInput): Rider!
        updateRider(_id:String!, rider: UpdateRiderInput): Rider!
        deleteRider(_id: String!): Rider!
    }

    input CreateRiderInput {
        ride: [Ride!]
        user: [User!]
        seats: Int!
        notes: String
        status: String!
    }

    input UpdateRiderInput {
        ride: [Ride!]
        user: [User!]
        seats: Int!
        notes: String
        status: String!
    }
    `;