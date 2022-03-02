import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from '../Recipe';
import { ObjectType, Field } from 'type-graphql';


@ObjectType()
@Entity()
export class RecipeTotalNutrition extends BaseEntity {


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
  @ManyToOne(() => Recipe, recipe => recipe.totalnutrition, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe
}
