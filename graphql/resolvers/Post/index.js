import Post from "../../../server/models/Post";
import User from "../../../server/models/User";

export default {
    Query: {
        post: async (parent, { _id }, context, info) => {
            const post = await Post.findOne({ _id })
                .populate()
                .exec()

            const user = await User.findOne({ _id: post.user })
                .populate()
                .exec()

            post.user = user;
            return post;
        },
        posts: async (parent, args, context, info) => {
            const posts = await Post.find({})
                .populate()
                .exec()

            return posts.map(p => ({
                _id: p._id.toString(),
                text: p.text,
                user: async () => {
                    return await User.findOne(p.user)
                }
            }));
        }
    },
    Mutation: {
        createPost: async (parent, { post }, context, info) => {
            const newPost = await new Post({
                text: post.text,
                user: post.userId
            });

            return new Promise((resolve, reject) => {
                newPost.save((err, res) => {
                    err ? reject(err) : resolve(res)
                });
            });
        }
    }
}