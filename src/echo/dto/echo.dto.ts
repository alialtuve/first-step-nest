import { IsNotEmpty } from 'class-validator';
export class EchoDto {
    @IsNotEmpty()
    rand: number;
    @IsNotEmpty()
    message: string;
}