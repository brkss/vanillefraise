import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Instruction } from "./Instuction";
import { Ingredient } from "./Ingredient";

@Entity("recipes")
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  serving?: number;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Ingredient, (ingredients) => ingredients.recipe, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  ingredients: Ingredient[];

  @OneToMany(() => Instruction, (instructions) => instructions.recipe, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  instructions: Instruction;
}
