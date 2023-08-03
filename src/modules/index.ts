import { makeExecutableSchema } from '@graphql-tools/schema'
import Food from './Food'
import Admin from './Admin'
import FoodCategory from './FoodCategory'
import User from './User'
import Restaurant from './Restaurant'
import Order from './Order'

import Upload from './Upload'
import Response from './Response'

export default makeExecutableSchema({
  typeDefs: [
    Food.typeDefs,
    Admin.typeDefs,
    FoodCategory.typeDefs,
    User.typeDefs,
    Restaurant.typeDefs,
    Order.typeDefs,
    Upload.typeDefs,
    Response.typeDefs,
  ],
  resolvers: [
    Food.resolvers,
    Admin.resolvers,
    FoodCategory.resolvers,
    User.resolvers,
    Restaurant.resolvers,
    Order.resolvers,
    Upload.resolvers,
  ],
})
