import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { MealRecipes } from './MealRecipes';

@ObjectType()
@Entity()
export class Meal extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  index: number;

  @Field(() => [MealRecipes])
  @OneToMany(() => MealRecipes, mealrecipes => mealrecipes.meal)
  mealrecipes: MealRecipes[];

}
