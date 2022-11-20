import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "../User";
import { TrackedElement } from "./TrackedElement";

@ObjectType()
@Entity("plans")
export class Plan extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column({default: true})
  active: boolean

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.plans, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @Field(() => [TrackedElement])
  @OneToMany(() => TrackedElement, (trackedElement) => trackedElement.plan)
  trackedElements: TrackedElement[];
}
