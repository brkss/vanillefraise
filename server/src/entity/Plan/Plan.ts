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
import { UserPlan } from './UserPlan';

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
  @Column({ default: true })
  active: boolean;

  @Field({ nullable: true })
  @Column({ default: "plans/default.webp" })
  image?: string;

  @Field()
  @Column({ default: false })
  public: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field(() => User, {nullable: true})
  @ManyToOne(() => User, (user) => user.plans, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user?: User;

  @Field(() => [TrackedElement])
  @OneToMany(() => TrackedElement, (trackedElement) => trackedElement.plan)
  trackedElements: TrackedElement[];


  @Field(() => [UserPlan])
  @OneToMany(() => UserPlan, userplans => userplans.plan)
  userplans: UserPlan[];

}
