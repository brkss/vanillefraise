import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class SpecialCondition extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;
}
