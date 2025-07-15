/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  authorId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  time: number;

  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty()
  ingredients: string[];

  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty()
  steps: string[];

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  cuisine: string;

  @IsOptional()
  @IsString()
  image: string;
}
