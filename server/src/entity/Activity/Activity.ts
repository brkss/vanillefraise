import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("activities")
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  duration: number;

  @Column({ nullable: true })
  feedback: string;

  @Column({ nullable: true })
  calories?: number;
}
