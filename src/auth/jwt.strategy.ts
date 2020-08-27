import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import  * as dotenv  from 'dotenv';
import { UsersService } from 'src/users/users.service';

dotenv.config();



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private  readonly authService: AuthService,
        private readonly userService: UsersService,
        ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRETKEY,
        });
    console.log(process.env.SECRTEKEY);

    }
    /*
    async validate(payload: JwtPayload): Promise<UserDto>{
        const user = await this.authService.validateUser(payload.username);
        if(!user){
            throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }*/
    async validate(payload: JwtPayload): Promise<UserDto> {
        return this.userService.getById(payload.userId);
    }

}