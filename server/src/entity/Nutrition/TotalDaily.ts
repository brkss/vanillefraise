import { Column, Entity, BaseEntity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Recipe } from '../Recipe';


@ObjectType()
@Entity()
export class RecipeTotalDaily extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  unit: string;

  @Field()
  @Column()
  quantity: number;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, recipe => recipe.totalDaily, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe;

}
