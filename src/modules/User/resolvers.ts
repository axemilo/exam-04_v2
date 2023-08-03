import AppDataSource from '../../config/config'
import { User } from '../../entity'
import jwt from '../../utils/jwt'

export default {
  Query: {
    users: async () => await AppDataSource.getRepository(User).find(),
  },

  User: {
    userId: (parent) => parent.user_id,
  },

  Mutation: {
    createUser: async (_, { username, password, email, balance }) => {
      const userRepository = AppDataSource.getRepository(User)
      const user = await userRepository.save({ username, password, email, balance })
      return {
        message: 'new user just created',
        data: user,
        token: jwt.sign({ userId: user.user_id }),
      }
    },
  },
}
