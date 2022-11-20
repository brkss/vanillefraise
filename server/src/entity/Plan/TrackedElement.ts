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

@ObjectType()
@Entity("tracked_elements")
export class TrackedElement extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quantity: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  unit: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Plan)
  @ManyToOne(() => Plan, (plan) => plan.trackedElements, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  plan: Plan;
}
