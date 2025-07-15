/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  @IsPositive()
  authorId: number;

  @IsInt()
  @IsPositive()
  recipeId: number;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
