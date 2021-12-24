import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Photo extends BaseEntity {
  @PrimaryColumn({ unique: true })
  label!: string;

  @Column()
  url!: string;
}
