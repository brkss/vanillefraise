import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from '../Recipe';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class RecipeTotalNutritionKcal extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  quantity: number;

  @Field()
  @Column()
  unit: string;

  @Field()
  @Column()
  code: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, recipe => recipe.totalnutritionkcal, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe;

}
