import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RecordCategory } from './Category';
import { User } from '../User';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Record extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  time: Date;

  @Field()
  @Column()
  value: number;

  @Field()
  @Column()
  date: Date;

  @Field(() => RecordCategory)
  @ManyToOne(() => RecordCategory, category => category.records, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  category: RecordCategory;

  @Field(() => User)
  @ManyToOne(() => User, user => user.records, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User;

}
