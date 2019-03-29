import { mergeResolvers } from 'merge-graphql-schemas';

//Resolvers for each models and logic
import User from './User/';
import Address from './Address';
import Vehicle from './Vehicle';

//Scalars for custom types
import Scalar from './Scalar';

const resolvers = [User, Address, Vehicle, Scalar];

export default mergeResolvers(resolvers);