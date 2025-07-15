import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly dbService: DatabaseService) {}

  async getAllForRecipe(recipeId: number) {
    return await this.dbService.reviews.findMany({ where: { recipeId } });
  }

  async getAllByAuthor(authorId: number) {
    return await this.dbService.reviews.findMany({ where: { authorId } });
  }

  async getOne(id: number) {
    return await this.dbService.reviews.findUnique({ where: { id } });
  }

  async create(createReviewDto: CreateReviewDto) {
    const newReview = await this.dbService.reviews.create({
      data: createReviewDto,
    });

    return newReview ? newReview : null;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const updatedReview = await this.dbService.reviews.update({
      where: { id },
      data: updateReviewDto,
    });

    return updatedReview ? updatedReview : null;
  }

  async remove(id: number) {
    const result = await this.dbService.reviews.delete({ where: { id } });

    return result ? result : null;
  }
}
