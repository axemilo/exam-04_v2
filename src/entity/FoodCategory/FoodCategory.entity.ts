import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'food_category' })
export class FoodCategory {
  @PrimaryGeneratedColumn()
  food_category_id: number

  @Column({ type: 'varchar', nullable: false })
  food_category_name: string

  @Column({ type: 'varchar', nullable: false })
  food_category_image: string
}
