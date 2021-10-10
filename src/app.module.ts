import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeORMConfig } from './configs/typeorm.config';

import { BoardModule } from './board/board.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), BoardModule, AuthModule],
})
export class AppModule {}
