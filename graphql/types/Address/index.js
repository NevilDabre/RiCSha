export default `
    scalar Date
    type Address {
        _id: String!
        placeId: String
        formattedAddress: String
        streetAddress: String
        locality: String
        sublocality: String
        administrativeAreaLevel1: String
        administrativeAreaLevel2: String
        postalCode: String
        country: String
        countryCode: String
        lat: Float
        lng: Float
        createAt: Date
        updatedAt: Date
    }

    type Query {
        address(_id: ID!):Address!
        addresess: [Address!]!
    }

    type Mutation {
        createAddress(address: CreateAddressInput): Address!
        updateAddress(_id:String!, address: UpdateAddressInput): Address!
        deleteAddress(_id: String!): Address!
    }

    input CreateAddressInput {
        placeId: String!
        formattedAddress: String
        streetAddress: String
        locality: String
        sublocality: String
        administrativeAreaLevel1: String
        administrativeAreaLevel2: String
        postalCode: String
        country: String
        countryCode: String
        lat: Float
        lng: Float
    }

    input UpdateAddressInput {
        placeId: String!
        formattedAddress: String
        streetAddress: String
        locality: String
        sublocality: String
        administrativeAreaLevel1: String
        administrativeAreaLevel2: String
        postalCode: String
        country: String
        countryCode: String
        lat: Float
        lng: Float
    }
    `;