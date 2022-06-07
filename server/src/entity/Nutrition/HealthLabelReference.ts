import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class HealthLabelRefrence extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  param: string;

  @Field()
  @Column()
  description: string;
}
