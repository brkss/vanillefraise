import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";

/*
 * THIS CLASS IS NOT PERFECT OR EVEN CLOSE TO PERFECT THIS IS JUST FOR TEST REASONS
 * FUTUER ME PLEASE IF YOU'RE STILL SEEING THIS DO SOMETHING ABOUT IT !
 */

@ObjectType()
@Entity()
export class Translated extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("text")
  txt: string;

  @Field()
  @Column()
  lang: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  pointer: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;
}
