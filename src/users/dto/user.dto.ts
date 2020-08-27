import { IsNotEmpty } from "class-validator";


export class UserDto {

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    username: string;
}