import { Module } from '@nestjs/common';
import { EchoController } from './echo.controller';
import { EchoService } from './echo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Echo } from './echo.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Echo])],
  providers: [EchoService, ],
  controllers: [EchoController],
})
export class EchoModule {}
