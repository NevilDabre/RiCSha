import User from "../../../server/models/User";

export default {
    Query: {
        user: async ( parent, {_id}, context, info)=>{
            return await User.findOne({ _id }).exec();
        },
        users: async (parent, args, context, info) =>{
            const users = await User.find({})
                .populate()
                .exec()

            return users.map(u=> ({
                _id: u._id.toString(),
                firstName: u.firstName,
                lastName: u.lastName,
                email: u.email,
                phone: u.phone,
                picture: u.picture,
                createAt: u.createAt,
                updatedAt: u.updatedAt
            }));
        }
    },
    Mutation: {
        createUser: async (parent , { user }, context, info)=>{
            const newUser = await new User({ 
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                picture: user.picture,
                createAt: new Date()
            });

            return new Promise((resolve,reject)=>{
                newUser.save((err, res)=>{
                    err? reject(err): resolve(res)
                });
            });
        },
        updateUser: async (parent, { _id, user }, context, info)=>{
            return new Promise((resolve, reject)=>{
                User.findOneAndUpdate( _id, { $set: { ...user, updatedAt: new Date() } }, { new: true}).exec(
                    (err, res) =>{
                        err? reject(err): resolve(res);
                    }
                );
            });
        },
        deleteUser: async (parent, {_id}, context, info) =>{
            return new Promise((resolve, reject)=>{
                User.findByIdAndDelete(_id).exec((err, res)=>{
                    err? reject(err): resolve(res);
                })
            })
        }
    }
}