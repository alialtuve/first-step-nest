import { Injectable } from '@nestjs/common';
import { Echo } from './echo.model';

@Injectable()
export class EchoService {
    private echo: Echo;
    showEcho (rand:number, message:string): Echo {
        const data: Echo = {
            'rand': rand,
            'message': message
        };
        if(rand < 6 ){
            return data;
        } else {
            if(message.length > 15){
                data.message='Mensaje no debe ser mayor de 15 caracteres';
                data.rand=0;
                return data;
            }
            else {
                data.message='With restrictions is not greater';
                return data;
            } 
        }
    }
}
