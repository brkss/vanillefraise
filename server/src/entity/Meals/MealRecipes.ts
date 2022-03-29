import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  ManyToOne,
} from "typeorm";
import { Recipe } from "../Recipe";
import { Meal } from "./Meal";
import { ObjectType, Field } from 'type-graphql';
import { User } from '../User';

@ObjectType()
@Entity()
export class MealRecipes extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.mealrecipes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  recipe: Recipe;

  @Field(() => Meal)
  @ManyToOne(() => Meal, (meal) => meal.mealrecipes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  meal: Meal;

  @Field(() => User)
  @ManyToOne(() => User, user => user.mealrecipes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;

  @Field()
  @Column("date")
  date: Date;
}
