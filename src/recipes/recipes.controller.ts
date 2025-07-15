import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { SearchQueryDto } from './dto/seacrQuery.dto';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { UpdateRecipeDto } from './dto/updateRecipe.dto';
import { Prisma } from 'generated/prisma';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UsersService } from 'src/users/users.service';

@Controller('recipes')
@UseGuards(JwtGuard)
export class RecipesController {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getAll(
    @Query(new ValidationPipe({ transform: true })) query: SearchQueryDto,
  ) {
    console.log(query);
    return await this.recipesService.getAll(query);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.recipesService.getOne(id);

    if (!result) throw new NotFoundException();

    return result;
  }

  @Post()
  async create(@Body(ValidationPipe) createRecipeDto: CreateRecipeDto) {
    if (!(await this.usersService.getOne(createRecipeDto.authorId))) {
      throw new BadRequestException('No such author');
    }
    const newRecipe = await this.recipesService.create(createRecipeDto);

    if (!newRecipe) throw new BadRequestException();

    return newRecipe;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateRecipeDto: UpdateRecipeDto,
  ) {
    try {
      await this.getOne(id);

      if (
        updateRecipeDto.authorId &&
        !(await this.usersService.getOne(updateRecipeDto.authorId))
      ) {
        throw new BadRequestException('No such author');
      }

      if (!Object.keys(updateRecipeDto).length) {
        throw new BadRequestException('Update data should be provided');
      }

      const updatedRecipe = await this.recipesService.update(
        id,
        updateRecipeDto,
      );

      return updatedRecipe;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        throw new BadRequestException('Invalid update data provided');
      }
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.getOne(id);

    const result = await this.recipesService.remove(id);

    if (!result) throw new BadRequestException();

    return;
  }
}
