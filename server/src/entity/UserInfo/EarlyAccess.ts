import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { User } from '../User';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class EarlyAccessRequest extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  service: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.earequest, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;

}
