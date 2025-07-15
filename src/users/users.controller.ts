import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Prisma } from 'generated/prisma';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtGuard)
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.getOne(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);

    if (!newUser) throw new ConflictException('Email is already taken');

    return newUser;
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    try {
      await this.getOne(id);

      if (!Object.keys(updateUserDto).length)
        throw new BadRequestException('Update data should be provided');

      const updatedUser = await this.usersService.update(id, updateUserDto);

      return updatedUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        throw new BadRequestException('Invalid update data provided');
      }
      throw error;
    }
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.getOne(id);

    await this.delete(id);

    return;
  }
}
