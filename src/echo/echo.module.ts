import { Module } from '@nestjs/common';
import { EchoController } from './echo.controller';
import { EchoService } from './echo.service';

@Module({
  providers: [EchoService],
  controllers: [EchoController]
})
export class EchoModule {}
