import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Admin, User, Food, FoodCategory, Restaurant, Order } from '../entity'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'tentaqwerty07',
  database: 'exam',
  entities: [Admin, User, Food, FoodCategory, Restaurant, Order],
  synchronize: true,
  logging: false,
})

export default AppDataSource
