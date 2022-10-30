import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { User } from "../User";
import { Recipe } from "./Recipe";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class RecipeReport extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.reportedrecipes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.reports, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  recipe: Recipe;

  @Field()
  @CreateDateColumn()
  created_at: Date;
}
