import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bycrypt from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    const salt = await bycrypt.genSalt();
    const hashedPassword = await bycrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword });

    try {
      return await this.save(user);
    } catch (error) {
      throw error.code === '23505'
        ? new ConflictException('Existing username')
        : new InternalServerErrorException();
    }
  }
}
