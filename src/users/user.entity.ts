import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class Users  {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({type:'varchar', nullable: false, unique:true})
    username: string;

    @Column({type:'varchar', nullable:false})
    password: string;

    @BeforeInsert()
    async hashPassword(): Promise<any> {
        this.password = await bcrypt.hash(this.password, 10);
    }
}