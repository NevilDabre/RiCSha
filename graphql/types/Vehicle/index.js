export default `
    scalar Date
    type Vehicle {
        _id: String!
        make: String!
        model: String
        licenseNumber: String
        seats: Int!
        createdAt: Date
        updatedAt: Date
    }

    type Query {
        vehicle(_id: ID!):Vehicle!
        vehicles: [Vehicle!]!
    }

    type Mutation {
        createVehicle(vehicle: CreateVehicleInput): Vehicle!
        updateVehicle(_id:String!, vehicle: UpdateVehicleInput): Vehicle!
        deleteVehicle(_id: String!): Vehicle!
    }

    input CreateVehicleInput {
        make: String!
        model: String
        licenseNumber: String
        seats: Int!
    }

    input UpdateVehicleInput {
        make: String!
        model: String
        licenseNumber: String
        seats: Int!
    }
    `;