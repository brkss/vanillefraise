import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Mood } from './Mood';
import { User } from '../User';

@ObjectType()
@Entity('moods_records')
export class MoodRecord extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @Field(() => Mood)
  @ManyToOne(() => Mood, mood => mood.records, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  mood: Mood;

  @Field(() => User)
  @ManyToOne(() => User, user => user.moodrecords, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;


}
