import { GraphQLUpload } from 'graphql-upload-ts'
import AppDataSource from '../../config/config'
import { Food } from '../../entity'
import { uploadFile } from '../../utils/uploadFile'
import jwt from '../../utils/jwt'

export default {
  Query: { foods: async () => await AppDataSource.getRepository(Food).find() },
  Food: {
    foodId: (parent) => parent.food_id,
    foodName: (parent) => parent.food_name,
    foodCategoryId: (parent) => parent.food_category_id,
    foodImg: (parent) => parent.food_image,
  },
  Mutation: {
    createFood: async (_, { foodName, price, description, foodCategoryId, foodImg }) => {
      let filename = null
      if (foodImg) filename = await uploadFile(foodImg)

      const foodsRepository = await AppDataSource.getRepository(Food)
      const foods = await foodsRepository.save({
        food_name: foodName,
        price,
        description,
        food_category_id: foodCategoryId,
        food_image: filename,
      })
      return { message: 'new food created', data: foods }
    },
    updateFood: async (_, { foodId, foodName, price, description, foodCategoryId, foodImg }) => {
      let filename = await uploadFile(foodImg)

      const foodRepository = await AppDataSource.getRepository(Food)
      await foodRepository.update(foodId, {
        food_name: foodName,
        price,
        description,
        food_category_id: foodCategoryId,
        food_image: filename,
      })
      const food = await foodRepository.findOne({
        where: { food_id: foodId },
      })

      return { message: 'the food updated', data: food }
    },
    deleteFood: async (_, { foodId }) => {
      const foodRepository = await AppDataSource.getRepository(Food)
      foodRepository.delete({ food_id: foodId })
      return { message: 'the food deleted' }
    },
  },
}
