import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Recipe } from "./Recipe";

@Entity("ingredients")
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  raw: string;

  @Column({ nullable: true })
  unit?: string;

  @Column({ nullable: true })
  amount?: number;

  @Column({ nullable: true })
  ingredients?: string;

  @CreateDateColumn()
  created_at: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;
}