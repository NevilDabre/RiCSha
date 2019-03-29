export default `
    sclar Date
    type Ride {
        _id: String!
        user: [User!]
        sourceAddress: [Address!]
        destinationAddress: [Address!]
        vehicle: [Vehicle]
        type: String!
        seats: Int!
        fare: Float
        startDateTime: Date!
        notes: String
        status: String
        createAt: Date
        updatedAt: Date
    }

    type Query {
        ride(_id: ID!):Ride!
        rides: [Ride!]
    }

    type Mutation {
        createRide(ride: CreateRideInput): Rider!
        updateRide(id:String!, ride: UpdateRideInput): Ride!
        deleteRide(id: String!): Rider!
    }

    input CreateRideInput {
        user: [User!]
        sourceAddress: [Address!]
        destinationAddress: [Address!]
        vehicle: [Vehicle]
        type: String!
        seats: Int!
        fare: Float
        startDateTime: Date!
        notes: String
        status: String
    }

    input UpdateRideInput {
        user: [User!]
        sourceAddress: [Address!]
        destinationAddress: [Address!]
        vehicle: [Vehicle]
        type: String!
        seats: Int!
        fare: Float
        startDateTime: Date!
        notes: String
        status: String
    }
    `;