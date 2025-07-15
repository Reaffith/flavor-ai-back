/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class SearchQueryDto {
  @IsOptional()
  @IsString()
  cuisine?: string;

  @IsOptional()
  @IsNumberString()
  maxTime?: string;

  @IsOptional()
  ingredients?: string | string[];
}
