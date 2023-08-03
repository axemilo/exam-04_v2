import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'restaurants' })
export class Restaurant {
  @PrimaryGeneratedColumn()
  restaurant_id: number

  @Column({ type: 'varchar', nullable: false })
  restaurant_name: string

  @Column({ type: 'integer', nullable: false })
  food_category_id: number
}
