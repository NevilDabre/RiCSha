export default `
    type Address {
        id: String!
        placeId: String
        streetAddress: String
        locality: String
        sublocality: String
        administrative_area_level_1: String
        administrative_area_level_2: String
        postal_code: String
        country: String
        lat: String
        lng: String
        createAt: scalar Date
        updatedAt: scalar Date
    }

    type Query {
        address(id: ID!):Address!
        addressess: [Address!]
    }

    type Mutation {
        createAddress(address: CreateAddressInput): Address!
        updateAddress(id:String!, address: UpdateAddressInput): Address!
        deleteAddress(id: String!): Address!
    }

    input CreateAddressInput {
        id: String!
        placeId: String
        streetAddress: String
        locality: String
        sublocality: String
        administrative_area_level_1: String
        administrative_area_level_2: String
        postal_code: String
        country: String
        lat: String
        lng: String
        createAt: scalar Date
    }

    input UpdateAddressInput {
        placeId: String
        streetAddress: String
        locality: String
        sublocality: String
        administrative_area_level_1: String
        administrative_area_level_2: String
        postal_code: String
        country: String
        lat: String
        lng: String
        updatedAt: scalar Date
    }
    `;