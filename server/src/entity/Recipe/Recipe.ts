import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Instruction } from "./Instuction";
import { Ingredient } from "./Ingredient";
import { ObjectType, Field } from "type-graphql";
import { RecipeCategory } from "./Category";
import {
  RecipeDietLabel,
  RecipeHealthLabel,
  RecipeTotalDaily,
  RecipeTotalNutrition,
  RecipeTotalNutritionKcal,
} from "../Nutrition";
import { CookedRecipe } from "../UserInfo";
import { MealRecipes } from "../Meals/MealRecipes";
import { RecipeReport } from './Report';

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
  @Column("text", { nullable: true })
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
  instructions: Instruction[];

  @Field(() => [RecipeDietLabel])
  @OneToMany(() => RecipeDietLabel, (dietl) => dietl.recipe)
  dietlabel: RecipeDietLabel[];

  @Field(() => [RecipeHealthLabel])
  @OneToMany(() => RecipeHealthLabel, (healthlabel) => healthlabel.recipe)
  healthlabel: RecipeHealthLabel[];

  @Field(() => [RecipeTotalDaily])
  @OneToMany(() => RecipeTotalDaily, (totaldaily) => totaldaily.recipe)
  totalDaily: RecipeTotalDaily[];

  @Field(() => [RecipeTotalNutrition])
  @OneToMany(
    () => RecipeTotalNutrition,
    (totalnutrition) => totalnutrition.recipe
  )
  totalnutrition: RecipeTotalNutrition[];

  @Field(() => [RecipeTotalNutritionKcal])
  @OneToMany(
    () => RecipeTotalNutritionKcal,
    (totalnutritionkcal) => totalnutritionkcal.recipe
  )
  totalnutritionkcal: RecipeTotalNutritionKcal[];

  @Field(() => [CookedRecipe])
  @OneToMany(() => CookedRecipe, (cookedrecipe) => cookedrecipe)
  cookedrecipes: CookedRecipe[];

  @Field(() => [MealRecipes])
  @OneToMany(() => MealRecipes, (mealrecipes) => mealrecipes.recipe)
  mealrecipes: MealRecipes[];

  @Field(() => [RecipeCategory])
  @ManyToMany(() => RecipeCategory, (categories) => categories.recipes)
  @JoinTable()
  categories: RecipeCategory[];

  @Field(() => RecipeReport)
  @OneToMany(() => RecipeReport, report => report.recipe)
  reports: RecipeReport[];
}
