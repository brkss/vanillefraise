import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity("activities")
export class Activity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  duration: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  feedback: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  calories?: number;
}
