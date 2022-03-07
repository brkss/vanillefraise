import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { ResetPassword } from "./ResetPassword";
import { Record } from "./Record";
import { MoodRecord } from "./Mental";
import { SpecialCondition, CookedRecipe } from "./UserInfo";
import { Activity } from './Activity';
import { EarlyAccessRequest } from './UserInfo/EarlyAccess';

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

  @OneToMany(() => ResetPassword, (resetpasswords) => resetpasswords.user)
  resetpasswords: ResetPassword[];

  @Field(() => [Record])
  @OneToMany(() => Record, (records) => records.user)
  records: Record[];

  @Field(() => [MoodRecord])
  @OneToMany(() => MoodRecord, (moodrecords) => moodrecords.user)
  moodrecords: MoodRecord[];

  @Field(() => [SpecialCondition])
  @ManyToMany(
    () => SpecialCondition,
    (specialconditions) => specialconditions.users
  )
  @JoinTable()
  specialconditions: SpecialCondition[];

  @Field(() => [CookedRecipe])
  @OneToMany(() => CookedRecipe, cookedrecipes => cookedrecipes.user)
  cookedrecipes: CookedRecipe[];

  @Field(() => [EarlyAccessRequest])
  @OneToMany(() => EarlyAccessRequest, earequest => earequest.user)
  earequest: EarlyAccessRequest[]

  @Field(() => [Activity])
  @OneToMany(() => Activity, activities => activities.user)
  activities: Activity[];

}
