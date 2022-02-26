import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Record } from './Record';

@ObjectType()
@Entity()
export class RecordCategory extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  icon?: string;

  @Field(() => [Record])
  @OneToMany(() => Record, records => records.category)
  records: Record[];
}
