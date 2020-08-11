import { EchoDto } from './dto/echo.dto';
import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { Echo } from './echo.model';
import { EchoService } from './echo.service';

@Controller('echo')
export class EchoController {
    constructor(private echoService: EchoService) {}


    @Post()
    @UsePipes(ValidationPipe)
    sendEcho( @Body() echoDto: EchoDto):Echo {
            return this.echoService.showEcho(echoDto);
        }
}
