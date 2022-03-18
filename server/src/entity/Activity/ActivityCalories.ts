import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ActivityCategory } from './ActivityCategory';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class ActivityCalories extends BaseEntity {


  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  zone: number;

  @Field()
  @Column()
  val: number;

  @Field(() => ActivityCategory)
  @ManyToOne(() => ActivityCategory, category => category.calories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  category: ActivityCategory

}
