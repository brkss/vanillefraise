import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Nutrition } from './Nutrition';


@ObjectType()
@Entity("nutritien_categories")
export class NutritienCategory extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field(() => [Nutrition])
  @OneToMany(() => Nutrition, nutrition => nutrition.category)
  nutrients: Nutrition[];
}
