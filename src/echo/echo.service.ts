import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EchoDto } from './dto/echo.dto';
import { Echo } from './echo.entity';

@Injectable()
export class EchoService {
    constructor(
        @InjectRepository(Echo)
        private echoRepository: Repository<Echo>,
    ) {}
    
    createEcho(newEchoDto:EchoDto):Promise <Echo>{
        const echo = new Echo();
        echo.rand = newEchoDto.rand;
        echo.message = newEchoDto.message;
        return this.echoRepository.save(echo);
    }
}
