import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { DietFoodFilter } from '../Diet/FoodFilter';

@Entity()
@ObjectType()
export class HealthLabelRefrence extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  param: string;

  @Field()
  @Column()
  description: string;

  @Field(() => [DietFoodFilter])
  @OneToMany(() => DietFoodFilter, filters => filters.healthlabel)
  filters: DietFoodFilter[];

}
