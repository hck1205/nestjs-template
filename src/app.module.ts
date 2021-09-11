import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeORMConfig } from './configs/typeorm.config';

import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), BoardsModule, AuthModule],
})
export class AppModule {}
