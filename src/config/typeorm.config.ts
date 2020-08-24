import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = 
{
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "signalsecret",
    database: "dbfirststepnest",
    entities: ["dist/echo/**.entity.js"],
    synchronize: true
};