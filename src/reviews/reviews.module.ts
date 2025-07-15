import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';
import { UsersService } from 'src/users/users.service';
import { RecipesService } from 'src/recipes/recipes.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ReviewsController],
  providers: [ReviewsService, DatabaseService, UsersService, RecipesService],
})
export class ReviewsModule {}
