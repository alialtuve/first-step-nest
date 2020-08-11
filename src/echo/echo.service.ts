import { EchoDto } from './dto/echo.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { Echo } from './echo.model';

@Injectable()
export class EchoService {
    private echo: Echo;
    showEcho ( echoDto:EchoDto): Echo {
        const { rand, message } = echoDto;
        const regExp = /^[0-9 A-Z a-z]+$/;
        const result = regExp.test(message);
        const data: Echo = {
            'rand': rand,
            'message': message
        };
        try {
            if(rand < 6 ){
                return data;
            } else {
                if(message.length > 15){             
                   throw new BadRequestException (Error);
                }
                else {
                    if(result){
                        return data;
                    } else {
                        throw new BadRequestException (Error);
                    }
                } 
            }
        }
        catch(error)
        {
            error.message ='Only letters and numbers or length less than 15';
            return error;
        }
    }
}
