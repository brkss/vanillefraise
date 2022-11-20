import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from '../User';

@Entity('plans')
export class Plan extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => User)
  @ManyToOne(() => User, user => user.plans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;

} 
