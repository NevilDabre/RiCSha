import { mergeResolvers } from 'merge-graphql-schemas';

import User from './User/';
import Address from './Address';
import Scalar from './Scalar';

const resolvers = [User, Address, Scalar];

export default mergeResolvers(resolvers);