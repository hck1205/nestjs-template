import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeORMConfig } from './configs/typeorm.config';

import { BoardModule } from './board/board.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMConfig),
    BoardModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
