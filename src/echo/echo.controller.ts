import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { EchoDto } from './dto/echo.dto';
import { EchoService } from './echo.service';
import { Echo } from './echo.entity';

@Controller('echo')
export class EchoController {
    constructor(private echoService: EchoService) {}

    @Post()
    @UsePipes(ValidationPipe)
    sendEcho( @Body() newEchoDto: EchoDto): Promise <Echo> {
            return this.echoService.createEcho(newEchoDto);
        }
}
