import { mergeResolvers } from 'merge-graphql-schemas';

//Resolvers for each models and logic
import User from './User/';
import Address from './Address';
import Vehicle from './Vehicle';
import Post from './Post';

//Scalars for custom types
import Scalar from './Scalar';

const resolvers = [User, Address, Vehicle, Post, Scalar];

export default mergeResolvers(resolvers);