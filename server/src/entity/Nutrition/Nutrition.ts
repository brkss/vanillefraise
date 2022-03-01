import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Nutrition extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  unit: string;

}
