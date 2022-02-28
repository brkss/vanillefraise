import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  OneToOne
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { ResetPassword } from "./ResetPassword";
import { Record } from './Record';
import { MoodRecord } from './Mental';
import { UserInformation } from './UserInfo';

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  /*
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  stripeID: string;
  */
  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column({ default: 1 })
  version: number;

  @OneToMany(() => ResetPassword, (resetpasswords) => resetpasswords.user)
  resetpasswords: ResetPassword[];

  @Field(() => [Record])
  @OneToMany(() => Record, records => records.user)
  records: Record[];

  @Field(() => [MoodRecord])
  @OneToMany(() => MoodRecord, moodrecords => moodrecords.user)
  moodrecords: MoodRecord[];

  @Field(() => UserInformation)
  @OneToOne(() => UserInformation, info => info.user)
  info: UserInformation

}
