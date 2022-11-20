import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Plan } from "./Plan";
import { Nutrition } from "../Nutrition/Nutrition";

@ObjectType()
@Entity("tracked_elements")
export class TrackedElement extends BaseEntity {
@Field()  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quantity: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Plan)
  @ManyToOne(() => Plan, (plan) => plan.trackedElements, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  plan: Plan;

  @Field(() => Nutrition)
  @ManyToOne(() => Nutrition, (nutrition) => nutrition.trackedElements, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  nutriton: Nutrition;
}
