import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchoController } from './echo/echo.controller';
import { EchoService } from './echo/echo.service';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [EchoModule],
  controllers: [AppController, EchoController],
  providers: [AppService, EchoService],
})
export class AppModule {}
