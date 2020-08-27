import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/user-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ){}

    async findOne(username:string):Promise <UserDto>{
        const user =  await this.userRepository.findOne(username);
        return user;
    }

    async findByLogin({username, password}:LoginUserDto):Promise<UserDto>{
        const user = await this.userRepository.findOne({where: {username}});
        if(!user){
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        const areEqual = await comparePassword( user.password, password);

        if(!areEqual){
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }

    async findByPayLoad(username: string): Promise<UserDto> {
        return await this.findOne(username);
    }

    async createUser(newUserDto:CreateUserDto): Promise<UserDto> {
        const { username, password } = newUserDto;

        const userRegister = await this.userRepository.findOne({where:{username}});

        if(userRegister){
            throw new HttpException('User already Exist', HttpStatus.BAD_REQUEST );
        }

        const user: Users =  this.userRepository.create({
            username, password
        });
        await this.userRepository.save(user);
        return user;
    }

    async getById(userId: number): Promise<UserDto> {
        const user = await this.userRepository.findOne({ userId });
        if (user) {
          return user;
        }
        throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
      }

}

const comparePassword =   async (userPassword:string, currentPassword:string) => {
    return await bcrypt.compare(currentPassword, userPassword);
}
