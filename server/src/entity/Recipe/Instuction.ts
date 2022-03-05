import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import { Recipe } from "./Recipe";

@ObjectType()
@Entity("instructions")
export class Instruction extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column('text')
  raw: string;

  @Field()
  @Column()
  index: number;
  
  @Field()
  @CreateDateColumn()
  created_at: Date;


  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.instructions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  recipe: Recipe;
}
