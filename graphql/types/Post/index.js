export default `
    type Post {
        _id: String!
        text: String!
        user: User
    }

    type Query {
        post(_id: ID!): Post
        posts: [Post]
    }

    type Mutation {
        createPost(post: CreatePostInput): Post
    }

    input CreatePostInput {
        text: String
        user: String
    }
    `;