import { LoginUserDto } from './../users/dto/user-login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegisStatus } from './interfaces/registration-status.interface';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Controller, Post, HttpException, HttpStatus, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto): Promise<RegisStatus>{
        const result:RegisStatus = await this.authService.register(createUserDto);
        if(!result.success){
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    @Post('login')
    public async login(@Body() loginUserDto:LoginUserDto): Promise<LoginStatus>{
        return await this.authService.login(loginUserDto);
    }
}
