import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Recipe } from "./Recipe";

@ObjectType()
@Entity("recipes_categories")
export class RecipeCategory extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  icon?: string;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field(() => [Recipe])
  @ManyToMany(() => Recipe, recipes => recipes.categories)
  recipes: Recipe[];
}
