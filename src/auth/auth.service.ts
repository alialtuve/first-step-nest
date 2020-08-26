import { JwtPayload } from './interfaces/payload.interface';
import { LoginUserDto } from './../users/dto/user-login.dto';
import { RegisStatus } from './interfaces/registration-status.interface';
import { JwtService } from '@nestjs/jwt';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        ){}
    
    async register(userDto: CreateUserDto): Promise<RegisStatus> {
        let status: RegisStatus = {
            success: true,
            message: 'User registered',
        };
        try {
            await this.usersService.createUser(userDto);
        }
        catch(err) {
            status = {
                success: false,
                message: err,
            }
        }
        return status;
    }

    async login( loginUserDto:LoginUserDto): Promise<any> {
        const user = await this.usersService.findByLogin(loginUserDto);
        const token = this._createToken(user);

        return {
            username: user.username, ...token,
        };
    }

    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const user = await this.usersService.findByPayLoad(payload.username);
        if(!user){
            throw new HttpException('Invlid Token', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }

    private _createToken({username, userId}: UserDto){
        const expiresIn = process.env.EXPIRESIN;
        const user: JwtPayload = { username , userId };

        const accessToken = this.jwtService.sign(user);

        return {
            expiresIn,
            accessToken,
        };
    }

    
}
