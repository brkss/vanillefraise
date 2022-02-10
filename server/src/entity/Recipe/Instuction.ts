import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Recipe } from "./Recipe";

@Entity("instructions")
export class Instruction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  raw: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.instructions)
  recipe: Recipe;
}
