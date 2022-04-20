import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { ActivityCategory } from "./ActivityCategory";
import { User } from "../User";

@ObjectType()
@Entity("activities")
export class Activity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  duration: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  feedback: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  calories?: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => ActivityCategory)
  @ManyToOne(() => ActivityCategory, (category) => category.activities, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  category: ActivityCategory;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.activities, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
