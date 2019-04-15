import User from "../../../server/models/User";
import Address from "../../server/models/Address";

const getResourceInfo = (user)=>{
    user.address = await Address.findOne({ _id: user.address })
    .populate()
    .exec()

    return user;
}

export default {
    Query: {
        user: async (parent, { _id }, context, info) => {
            const user = await User.findOne({ _id })
                .populate()
                .exec();
            
            return getResourceInfo(user);
        },
        users: async (parent, args, context, info) => {
            const users = await User.find({})
                .populate()
                .exec()

            return users.map(u => ({
                _id: u._id.toString(),
                firstName: u.firstName,
                lastName: u.lastName,
                email: u.email,
                phone: u.phone,
                picture: u.picture,
                address: async () => { return await Address.findOne({ _id: user.address }) },
                createAt: u.createAt,
                updatedAt: u.updatedAt
            }));
        }
    },
    Mutation: {
        createUser: async (parent, { user }, context, info) => {
            const newUser = await new User({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                picture: user.picture,
                address: user.addressId,
                createAt: new Date()
            });

            return new Promise((resolve, reject) => {
                newUser.save((err, res) => {
                    err ? reject(err) : resolve(getResourceInfo(res))
                });
            });
        },
        updateUser: async (parent, { _id, user }, context, info) => {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate(_id, { $set: { ...user, updatedAt: new Date() } }, { new: true }).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(getResourceInfo(res));
                    }
                );
            });
        },
        deleteUser: async (parent, { _id }, context, info) => {
            return new Promise((resolve, reject) => {
                User.findByIdAndDelete(_id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    }
}