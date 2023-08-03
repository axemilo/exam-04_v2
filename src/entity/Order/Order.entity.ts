import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number

  @Column({ type: 'integer', nullable: false })
  user_id: number

  @Column({ type: 'integer', nullable: false })
  food_id: number

  @Column({ type: 'integer', nullable: false })
  count: number
}
