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
  Req,
  UnauthorizedException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { UsersService } from 'src/users/users.service';
import { RecipesService } from 'src/recipes/recipes.service';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Request } from 'express';

@Controller('reviews')
@UseGuards(JwtGuard)
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService,
    private readonly usersService: UsersService,
    private readonly recipesService: RecipesService,
  ) {}

  @Get('recipe/:recipeId')
  async getAllByRecipe(@Param('recipeId', ParseIntPipe) recipeId: number) {
    if (!(await this.recipesService.getOne(recipeId))) {
      throw new BadRequestException('No such Recipe');
    }

    return await this.reviewsService.getAllForRecipe(recipeId);
  }

  @Get('/author/:authorId')
  async getAllByAuthor(@Param('authorId', ParseIntPipe) authorId: number) {
    if (!(await this.usersService.getOne(authorId))) {
      throw new BadRequestException('No such Author');
    }

    return await this.reviewsService.getAllByAuthor(authorId);
  }

  @Post()
  async create(
    @Body(ValidationPipe) createReviewDto: CreateReviewDto,
    @Req() req: Request,
  ) {
    if ((req.user as { id: number }).id !== createReviewDto.authorId) {
      throw new UnauthorizedException(
        'Only user can create reviwes with their authorID',
      );
    }

    const newReview = await this.reviewsService.create(createReviewDto);

    if (!newReview) {
      throw new BadRequestException();
    }

    return newReview;
  }

  @Patch(':id')
  async update(
    @Body(ValidationPipe) updateReviewDto: UpdateReviewDto,
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
  ) {
    if ((req.user as { id: number }).id !== updateReviewDto.authorId) {
      throw new UnauthorizedException('Only user can chacnge their reviews');
    }
    if (!(await this.reviewsService.getOne(id))) {
      throw new NotFoundException();
    }

    const updatedReview = await this.reviewsService.update(id, updateReviewDto);

    if (!updatedReview) {
      throw new BadRequestException();
    }

    return updatedReview;
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    const review = await this.reviewsService.getOne(id);

    if (!review) throw new NotFoundException();

    if ((req.user as { id: number }).id !== review.authorId) {
      throw new UnauthorizedException('Only user can delete their reviews');
    }

    const res = await this.reviewsService.remove(id);

    if (!res) throw new BadRequestException();

    return;
  }
}
