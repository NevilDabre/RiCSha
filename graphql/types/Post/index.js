export default `
    type Post {
        _id: String!
        text: String!
        userId: String
        user: User
    }

    type Query {
        post(_id: ID): Post
        posts: [Post!]
    }

    type Mutation {
        createPost(post: createPostInput): Post
    }

    input createPostInput {
        text: String
        userId: String
    }
    `;