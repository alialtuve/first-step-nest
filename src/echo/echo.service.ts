import { EchoDto } from './dto/echo.dto';
import { Injectable } from '@nestjs/common';
import { Echo } from './echo.model';

@Injectable()
export class EchoService {
    private echo: Echo;
    showEcho ( echoDto:EchoDto): Echo {
        return echoDto;
    }
}
