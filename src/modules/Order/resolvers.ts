import AppDataSource from '../../config/config'
import { Order } from '../../entity'

export default {
  Query: { orders: async () => await AppDataSource.getRepository(Order).find() },
  Order: {
    orderId: (parent) => parent.order_id,
    userId: (parent) => parent.user_id,
    foodId: (parent) => parent.food_id,
  },
  Mutation: {
    createOrder: async (_, { userId, foodId, count }) => {
      const orderRepository = AppDataSource.getRepository(Order)
      const order = await orderRepository.save({ user_id: userId, food_id: foodId, count })
      return { message: 'new order added', data: order }
    },
    deleteOrder: async (_, { orderId }) => {
      const orderRepository = AppDataSource.getRepository(Order)
      const order = await orderRepository.delete({ order_id: orderId })
      return { message: 'the order deleted', data: order }
    },
    updateOrder: async (_, { orderId, userId, foodId, count }) => {
      const orderRepository = AppDataSource.getRepository(Order)
      await orderRepository.update(orderId, {
        user_id: userId,
        food_id: foodId,
        count,
      })
      const order = await orderRepository.findOne({ where: { order_id: orderId } })

      return { message: 'the order updated', data: order }
    },
  },
}
