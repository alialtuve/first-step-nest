import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Echo  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rand: number;

    @Column()
    message: string;
}