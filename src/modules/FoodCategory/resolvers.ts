import { GraphQLUpload } from 'graphql-upload-ts'
import AppDataSource from '../../config/config'
import { FoodCategory } from '../../entity'
import { uploadFile } from '../../utils/uploadFile'

export default {
  Query: {
    foodCategories: async () => await AppDataSource.getRepository(FoodCategory).find(),
  },
  FoodCategory: {
    foodCategoryId: (parent) => parent.food_category_id,
    foodCategoryName: (parent) => parent.food_category_name,
    foodCategoryImage: (parent) => parent.food_category_image,
  },
  Mutation: {
    createFoodCategory: async (_, { foodCategoryName, foodCategoryImage }) => {
      let filename = await uploadFile(foodCategoryImage)
      const foodCategoryRepository = await AppDataSource.getRepository(FoodCategory)

      const foodCategory = await foodCategoryRepository.save({
        food_category_name: foodCategoryName,
        food_category_image: filename,
      })

      return { message: 'new food category created', data: foodCategory }
    },
  },
}
