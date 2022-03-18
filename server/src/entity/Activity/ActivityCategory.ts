import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Activity } from './Activity';
import { ActivityCalories } from './ActivityCalories';

@ObjectType()
@Entity("activity_categories")
export class ActivityCategory extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  icon?: string;

  @Field(() => [ActivityCalories])
  @OneToMany(() => ActivityCalories, calories => calories.category)
  calories: ActivityCalories[];

  @Field(() => [Activity])
  @OneToMany(() => Activity, activities => activities.category)
  activities: Activity[]
}
