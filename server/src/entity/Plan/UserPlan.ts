import { Entity, BaseEntity,  Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Plan } from './Plan';
import { User } from '../User'
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity('user_plans')
export class UserPlan extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Field(() => Plan)
  @ManyToOne(() => Plan, plan => plan.userplans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  plan: Plan;


  @Field(() => User)
  @ManyToOne(() => User, user => user.userplans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User

  @CreateDateColumn()
  created_at: Date;

}
