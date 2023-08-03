import AppDataSource from '../../config/config'
import { Admin } from '../../entity'
import jwt from '../../utils/jwt'

export default {
  Query: { admin: async () => await AppDataSource.getRepository(Admin).find() },
  Admin: {
    adminId: (parent) => parent.admin_id,
    adminName: (parent) => parent.admin_name,
  },
  Mutation: {
    register: async (_, { adminName, password }) => {
      const adminRepository = AppDataSource.getRepository(Admin)
      const admin = await adminRepository.save({ admin_name: adminName, password })
      return {
        message: 'new admin just created',
        token: jwt.sign({ adminId: admin.admin_id }),
        data: admin,
      }
    },
    updateAdmin: async (_, { adminId, adminName, password }, { token }) => {
      try {
        const isToken = jwt.verify(token)
        if (!isToken) {
          return null
        } else {
          const adminRepository = await AppDataSource.getRepository(Admin)
          const admin = await adminRepository.findOne({
            where: { admin_id: adminId },
          })
          admin.admin_name = adminName
          adminRepository.update(adminId, admin)

          return {
            message: 'the admin updated',
            token: jwt.sign({ adminId: admin.admin_id }),
            data: admin,
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    login: async (_, { adminName, password }) => {
      try {
        const adminRepository = await AppDataSource.getRepository(Admin)
        const admin = await adminRepository.findOne({
          where: {
            admin_name: adminName,
            password,
          },
        })

        if (!admin) {
          throw new Error('username or password incorrect')
        } else {
          return {
            message: 'successfully logined',
            token: jwt.sign({ adminId: admin.admin_id }),
            data: admin,
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
