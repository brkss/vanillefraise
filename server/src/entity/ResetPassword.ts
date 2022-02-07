import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class ResetPassword extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ default: false })
  expired: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.resetpasswords, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
