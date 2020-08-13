import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Echo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rand: number;

    @Column()
    message: string;
}