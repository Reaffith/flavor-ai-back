/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SearchQueryDto } from './dto/seacrQuery.dto';
import { Prisma } from 'generated/prisma';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { UpdateRecipeDto } from './dto/updateRecipe.dto';

@Injectable()
export class RecipesService {
  constructor(private readonly dbService: DatabaseService) {}

  async getAll(query?: SearchQueryDto) {
    if (query) {
      const queryObject: Prisma.RecipesWhereInput = {};

      if (query.cuisine) {
        queryObject.cuisine = query.cuisine;
      }

      if (query.maxTime) {
        if (+query.maxTime < 0) {
          throw new BadRequestException('Max time should be a positive value');
        }

        queryObject.time = {
          lt: +query.maxTime,
        };
      }

      if (query.ingredients) {
        let ingredients: string[] = [];
        if (typeof query.ingredients === 'string') {
          ingredients.push(query.ingredients);
        } else {
          ingredients = query.ingredients;
        }

        queryObject.ingredients = { hasEvery: ingredients };
      }

      return await this.dbService.recipes.findMany({ where: queryObject });
    }

    return await this.dbService.recipes.findMany();
  }

  async getOne(id: number) {
    return await this.dbService.recipes.findUnique({ where: { id } });
  }

  async create(createRecipeDto: CreateRecipeDto) {
    return await this.dbService.recipes.create({ data: createRecipeDto });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const result = await this.dbService.recipes.update({
      where: { id },
      data: updateRecipeDto,
    });

    return result ? result : null;
  }

  async remove(id: number) {
    const result = await this.dbService.recipes.delete({ where: { id } });

    return result ? result : null;
  }
}
