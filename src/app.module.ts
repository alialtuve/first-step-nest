import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchoModule } from './echo/echo.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    EchoModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection:Connection){}
}
