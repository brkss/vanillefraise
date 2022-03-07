import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NutritionRecomendation extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  code: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  unit: string;

  @Column()
  population: string;

  @Column()
  ageStart: number;

  @Column()
  ageEnd: number;
}
