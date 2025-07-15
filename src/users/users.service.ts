/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DatabaseService) {}

  async create({ email, password, name }: CreateUserDto) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await this.dbService.users.create({
      data: { email, passwordHash, name },
    });

    return user ? user : null;
  }

  async getAll() {
    const users = await this.dbService.users.findMany();

    return users.map(({ passwordHash, ...rest }) => rest);
  }

  async getOne(id: number) {
    return await this.dbService.users.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password, ...updateData } = updateUserDto;

    const result = await this.dbService.users.update({
      where: { id },
      data: {
        ...updateData,
        ...(password && { passwordHash: await bcrypt.hash(password, 10) }),
      },
    });

    return result ? result : null;
  }

  async remove(id: number) {
    const res = await this.dbService.users.delete({ where: { id } });

    return res ? res : null;
  }
}
