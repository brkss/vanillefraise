import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Recipe } from "./Recipe";

@Entity("instructions")
export class Instruction extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  raw: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.instructions)
  recipe: Recipe;
}
