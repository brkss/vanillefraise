import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from '../Recipe';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class RecipeHealthLabel extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  label: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, recipe => recipe.healthlabel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe;

}
