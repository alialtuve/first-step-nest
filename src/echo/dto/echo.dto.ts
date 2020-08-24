import { IsNotEmpty, Matches, ValidateIf, MaxLength, MinLength } from 'class-validator';

export class EchoDto {

    @IsNotEmpty()
    rand: number;

    @ValidateIf(randfield => randfield.rand > 5)
    @IsNotEmpty()
    @MaxLength(15)
    @Matches(/^[0-9 A-Z a-z]+$/, {message:"Must use only letters and numbers"})
    message: string;
}