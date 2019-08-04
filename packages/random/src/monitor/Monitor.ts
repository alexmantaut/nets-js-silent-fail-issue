import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

export type CommsAddressType = string

@Entity()
export class Monitor {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ nullable: true })
  public label?: string

  @Column({ nullable: true })
  public comments?: string

  @Column()
  public commsAddress: CommsAddressType

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date
}
