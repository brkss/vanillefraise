import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NutritionRecomendation extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  quantity: number;

  @Column()
  unit: string;

  @Column()
  population: string;

  @Column()
  ageStart: number;

  @Column()
  ageEnd: number;

}
