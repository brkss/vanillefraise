import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { NutritienCategory } from "./NutrientCategory";
import { TrackedElement } from '../Plan/TrackedElement'; 

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

  @Field(() => [TrackedElement])
  @OneToMany(() => TrackedElement, trackedElements => trackedElements.nutriton)
  trackedElements: TrackedElement[]

}
