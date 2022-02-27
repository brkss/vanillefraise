import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MoodRecord } from './MoodRecord';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity('moods')
export class Mood extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  icon: string;

  @Field()
  @Column({default: true})
  active: boolean;

  @Field(() => [MoodRecord])
  @OneToMany(() => MoodRecord, records => records.mood)
  records: MoodRecord[];
}
