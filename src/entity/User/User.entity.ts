import { Length, Min } from 'class-validator'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  user_id: number

  @Column({ type: 'varchar', nullable: false })
  @Length(4, 32)
  username: string

  @Column({ type: 'varchar', nullable: false })
  @Length(8, 64)
  password: string

  @Column({ type: 'varchar', nullable: false })
  @Length(12, 64)
  email: string

  @Column({ type: 'integer', nullable: false })
  @Length(1, 999999999999)
  balance: number
}
