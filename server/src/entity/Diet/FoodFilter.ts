import { Entity, BaseEntity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";
import { User } from "../../entity/User";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class DietFoodFilter extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Field(() => HealthLabelRefrence)
  @Field(() => HealthLabelRefrence)
  @ManyToOne(() => HealthLabelRefrence, (hlr) => hlr.filters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  healthlabel: HealthLabelRefrence;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.filters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
