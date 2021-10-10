import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BoardRepository } from './board.repository';
import { BoardsController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository]), AuthModule],
  controllers: [BoardsController],
  providers: [BoardService],
})
export class BoardModule {}
