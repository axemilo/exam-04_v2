import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Length } from 'class-validator'

@Entity({ name: 'admin' })
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: number

  @Column({ type: 'varchar', nullable: false })
  @Length(32)
  admin_name: string

  @Column({ type: 'varchar', nullable: false })
  @Length(32)
  password: string
}
