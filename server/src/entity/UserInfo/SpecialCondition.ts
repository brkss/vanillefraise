import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import { User } from '../User';

@ObjectType()
@Entity()
export class SpecialCondition extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [User])
  @ManyToMany(() => User, users => users.specialconditions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  users: User[];
}
