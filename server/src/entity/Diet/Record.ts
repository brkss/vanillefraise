import { CreateDateColumn, Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class DietRecord extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  value: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;
}
