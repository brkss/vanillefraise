import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { ResetPassword } from "./ResetPassword";
import { Record } from "./Record";
import { SpecialCondition, CookedRecipe } from "./UserInfo";
import { EarlyAccessRequest } from "./UserInfo/EarlyAccess";
import { MealRecipes } from "./Meals/MealRecipes";
import { DietFoodFilter, MacrosConfig, DietRecord } from "./Diet";
import { RecipeReport } from "./Recipe";
import { Plan, UserPlan } from './Plan';

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
  @Column({ default: false })
  verified: boolean;

  @Field()
  @Column()
  birth: Date;

  @OneToMany(() => ResetPassword, (resetpasswords) => resetpasswords.user)
  resetpasswords: ResetPassword[];

  @Field(() => [Record])
  @OneToMany(() => Record, (records) => records.user)
  records: Record[];

  @Field(() => Boolean)
  @Column({ default: false })
  banned: boolean;


  @Field(() => [SpecialCondition])
  @ManyToMany(
    () => SpecialCondition,
    (specialconditions) => specialconditions.users
  )
  @JoinTable()
  specialconditions: SpecialCondition[];

  @Field(() => [CookedRecipe])
  @OneToMany(() => CookedRecipe, (cookedrecipes) => cookedrecipes.user)
  cookedrecipes: CookedRecipe[];

  @Field(() => [EarlyAccessRequest])
  @OneToMany(() => EarlyAccessRequest, (earequest) => earequest.user)
  earequest: EarlyAccessRequest[];

  @Field(() => [MealRecipes])
  @OneToMany(() => MealRecipes, (mealrecipes) => mealrecipes.user)
  mealrecipes: MealRecipes[];

  @Field(() => [DietFoodFilter])
  @OneToMany(() => DietFoodFilter, (filter) => filter.user)
  filters: DietFoodFilter[];

  @Field(() => MacrosConfig)
  @OneToOne(() => MacrosConfig, (config) => config.user)
  config: MacrosConfig;

  // Diet
  @Field(() => [DietRecord])
  @OneToMany(() => DietRecord, (record) => record.user)
  dietRecords: DietRecord[];

  @Field(() => RecipeReport)
  @OneToMany(() => RecipeReport, (report) => report.user)
  reportedrecipes: RecipeReport[];

  @Field(() => [Plan])
  @OneToMany(() => Plan, plans => plans.user)
  plans: Plan[]

  @Field(() => [UserPlan])
  @OneToMany(() => UserPlan, userplans => userplans.user)
  userplans: UserPlan[] 

}
