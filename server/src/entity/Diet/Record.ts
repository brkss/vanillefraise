import { CreateDateColumn, Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import { User } from '../User';

@ObjectType()
@Entity()
export class DietRecord extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  value: number;

  @Field()
  @Column()
  unit: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => User)
  @ManyToOne(() => User, user => user.dietRecords, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User

}
