import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { NutritienCategory } from "./NutrientCategory";

@ObjectType()
@Entity()
export class Nutrition extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  unit: string;

  @Field(() => NutritienCategory)
  @ManyToOne(() => NutritienCategory, (category) => category.nutrients)
  category: NutritienCategory;
}
