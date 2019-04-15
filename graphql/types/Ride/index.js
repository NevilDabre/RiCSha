export default `
    scalar Date
    type Ride {
        _id: String!
        user: User
        sourceAddress: Address
        destinationAddress: Address
        vehicle: Vehicle
        type: String
        seats: Int!
        fare: Float
        startDateTime: Date!
        notes: String
        status: String
        createAt: Date
        updatedAt: Date
    }

    type Query {
        ride(_id: ID!):Ride
        rides: [Ride]
    }

    type Mutation {
        createRide(ride: CreateRideInput): Ride
        updateRide(id:String!, ride: UpdateRideInput): Ride
        deleteRide(id: String!): Ride
    }

    input CreateRideInput {
        user: String
        sourceAddress: String
        destinationAddress: String
        vehicle: String
        type: String
        seats: Int
        fare: Float
        startDateTime: Date
        notes: String
        status: String
    }

    input UpdateRideInput {
        user: String
        sourceAddress: String
        destinationAddress: String
        vehicle: String
        type: String
        seats: Int
        fare: Float
        startDateTime: Date
        notes: String
        status: String
    }
    `;