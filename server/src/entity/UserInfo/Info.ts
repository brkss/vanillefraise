import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "../User";

@ObjectType()
@Entity()
export class UserInformation extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  weight: number;

  @Field()
  @Column()
  height: number;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  bmi: number;

  @Field()
  @Column()
  birth: Date;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.info, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
