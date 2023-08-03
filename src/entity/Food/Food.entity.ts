import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm'

@Entity({ name: 'foods' })
export class Food {
  @PrimaryGeneratedColumn()
  food_id: number

  @Column({ type: 'varchar', nullable: false })
  food_name: string

  @Column({ type: 'integer', nullable: false })
  price: number

  @Column({ type: 'text', nullable: false })
  description: string

  @Column({ type: 'varchar', nullable: false })
  food_image: string

  @Column({ type: 'integer', nullable: false })
  food_category_id: number
}
