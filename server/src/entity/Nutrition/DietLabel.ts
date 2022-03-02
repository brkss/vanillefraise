import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { ObjectType, Field } from 'type-graphql'
import { Recipe } from '../Recipe';

@ObjectType()
@Entity()
export class RecipeDietLabel extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  label: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, recipe => recipe.dietlabel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe;

}
