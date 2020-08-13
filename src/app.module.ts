import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchoController } from './echo/echo.controller';
import { EchoService } from './echo/echo.service';
import { EchoModule } from './echo/echo.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot( typeOrmConfig),
    EchoModule],
  controllers: [AppController, EchoController],
  providers: [AppService, EchoService],
})
export class AppModule {}
