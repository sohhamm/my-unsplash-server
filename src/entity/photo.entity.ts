import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";
// const { BaseEntity, Entity } = pkg;

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
