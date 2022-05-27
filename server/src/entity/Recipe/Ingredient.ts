import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Recipe } from "./Recipe";
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity("ingredients")
export class Ingredient extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  raw: string;

  @Field({nullable: true})
  @Column({ nullable: true })
  unit?: string;

  @Field({nullable: true})
  @Column({ nullable: true })
  amount?: string;

  @Field({nullable: true})
  @Column({ nullable: true })
  ingredients?: string;

  @Field()
  @CreateDateColumn()
  created_at: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe;
}
