export default `
    type Ride {
        id: String!
        user: [User!]
        sourceAddressId: String!
        destinationAddressId: String!
        vehicle: [Vehicle!]
        type: String!
        seats: Int!
        fare: Float
        startDateTime: scalar Date!
        notes: String
        status: String
        createAt: scalar Date
        updatedAt: scalar Date
    }

    type Query {
        ride(id: ID!):Ride!
        rides: [Ride!]
    }

    type Mutation {
        createRide(ride: CreateRideInput): Rider!
        updateRide(id:String!, ride: UpdateRideInput): Ride!
        deleteRide(id: String!): Rider!
    }

    input CreateRideInput {
        id: String!
        user: [User!]
        sourceAddressId: String!
        destinationAddressId: String!
        vehicle: [Vehicle!]
        type: String!
        seats: Int!
        fare: Float
        startDateTime: scalar Date!
        notes: String
        status: String
        createAt: scalar Date
    }

    input UpdateRideInput {
        user: [User!]
        sourceAddressId: String!
        destinationAddressId: String!
        vehicle: [Vehicle!]
        type: String!
        seats: Int!
        fare: Float
        startDateTime: scalar Date!
        notes: String
        status: String
        updatedAt: scalar Date
    }
    `;