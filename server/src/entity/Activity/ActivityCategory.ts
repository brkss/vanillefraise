import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("activity_categories")
export class ActivityCategory extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  icon?: string;
}
