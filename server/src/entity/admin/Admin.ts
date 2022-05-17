import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Admin extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ nullable: true })
  name?: string;

  @Field()
  @Column({ nullable: true, unique: true })
  email?: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
