import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Instruction } from "./Instuction";
import { Ingredient } from "./Ingredient";

@Entity("recipes")
export class Recipe extends BaseEntity {
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

  @Column({ nullable: true })
  cook?: string;

  @Column({ nullable: true })
  prep?: string;

  @Column({ nullable: true })
  total?: string;

  @Column({ default: true })
  public: boolean;

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
