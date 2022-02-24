import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Instruction } from "./Instuction";
import { Ingredient } from "./Ingredient";
import { ObjectType, Field } from "type-graphql";
import { RecipeCategory } from "./Category";

@ObjectType()
@Entity("recipes")
export class Recipe extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  serving?: number;

  @Field()
  @Column()
  image: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  cook?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  prep?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  total?: string;

  @Field()
  @Column({ unique: true })
  url: string;

  @Field()
  @Column({ default: true })
  public: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => [Ingredient])
  @OneToMany(() => Ingredient, (ingredients) => ingredients.recipe, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  ingredients: Ingredient[];

  @Field(() => [Instruction])
  @OneToMany(() => Instruction, (instructions) => instructions.recipe, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  instructions: Instruction;

  @Field(() => [RecipeCategory])
  @ManyToMany(() => RecipeCategory, (categories) => categories.recipes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  categories: RecipeCategory[];
}
