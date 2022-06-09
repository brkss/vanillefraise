import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../User";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity("macros_configs")
export class MacrosConfig extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("float")
  activityFactor: number;

  @Field()
  @Column()
  fat: number;

  @Field()
  @Column()
  carbs: number;

  @Field()
  @Column()
  protein: number;

  @Field(() => User)
  @OneToOne(() => User, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn()
  user: User;
}
