import { JwtAuthGuard } from './../auth/jwt-auth.guards';
import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { EchoDto } from './dto/echo.dto';
import { EchoService } from './echo.service';
import { Echo } from './echo.entity';

@Controller('echo')
export class EchoController {
    constructor(private echoService: EchoService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    sendEcho( @Body() newEchoDto: EchoDto): Promise <Echo> {
            return this.echoService.createEcho(newEchoDto);
        }
}
