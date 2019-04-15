import { mergeResolvers } from 'merge-graphql-schemas';

//Resolvers for each models and logic
import User from './User/';
import Address from './Address';
import Vehicle from './Vehicle';
import Post from './Post';
import Ride from './Ride';
import Rider from './Rider';

//Scalars for custom types
import Scalar from './Scalar';

const resolvers = [User, Address, Vehicle, Post, Scalar, Ride, Rider];

export default mergeResolvers(resolvers);