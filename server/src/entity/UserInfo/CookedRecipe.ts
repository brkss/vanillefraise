import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../User";
import { Recipe } from "../Recipe";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class CookedRecipe extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.cookedrecipes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  recipe: Recipe;

  @Field(() => User)
  @ManyToOne(() => User, user => user.cookedrecipes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;

}