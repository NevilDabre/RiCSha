import Post from "../../../server/models/Post";
import User from "../../../server/models/User";

export default {
    Query: {
        post: async ( parent, {_id}, context, info)=>{
            return await Post.findOne({ _id }).exec();
        },
         posts: async (parent, args, context, info) =>{
            const posts = await Post.find({})
                .populate()
                .exec()

            return posts.map(p=> ({
                _id: p._id.toString(),
                text: p.text,
                userId: p.userId,
                user: async () => {
                    return await User.findOne(p.userId)
                }
            }));
        }
    },
    Mutation: {
        createPost: async (parent , { post }, context, info)=>{
            const newPost = await new Post({ 
                text: post.text,
                userId: post.userId
            });

            return new Promise((resolve,reject)=>{
                newPost.save((err, res)=>{
                    err? reject(err): resolve(res)
                });
            });
        }
    }
}