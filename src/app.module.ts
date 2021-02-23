import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import databaseConfig from './config/database.config';
import { Permission } from './permission/permission.entity';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TypeOrmModule.forRoot(databaseConfig()),
    TypeOrmModule.forFeature([Permission]),
    PermissionModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
