import AppDataSource from '../../config/config'
import { Restaurant } from '../../entity'

export default {
  Query: { restaurants: async () => await AppDataSource.getRepository(Restaurant).find() },
  Restaurant: {
    restaurantId: (parent) => parent.restaurant_id,
    restaurantName: (parent) => parent.restaurant_name,
    foodCategoryId: (parent) => parent.food_category_id,
  },
  Mutation: {
    createRestaurant: async (_, { restaurantName, foodCategoryId }) => {
      const restaurantRepository = AppDataSource.getRepository(Restaurant)
      const restaurant = restaurantRepository.save({
        restaurant_name: restaurantName,
        food_category_id: foodCategoryId,
      })
      return { message: 'new restaurant created', data: restaurant }
    },
  },
}
