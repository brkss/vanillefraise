import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinTable,
} from "typeorm";
import { User } from "../User";

@Entity("macros_configs")
export class MacrosConfig extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  activityFactor: number;

  @Column()
  fat: number;

  @Column()
  carbs: number;

  @Column()
  protein: number;

  @OneToOne(() => User, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinTable()
  user: User;
}
