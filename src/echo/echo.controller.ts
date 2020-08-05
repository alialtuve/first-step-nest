import { Controller, Post, Body } from '@nestjs/common';
import { Echo } from './echo.model';
import { EchoService } from './echo.service';

@Controller('echo')
export class EchoController {
    constructor(private echoService: EchoService) {}


    @Post()
    sendEcho(
        @Body('rand') rand: number,
        @Body('message') message: string):Echo {
            return this.echoService.showEcho(rand, message);
        }
}
