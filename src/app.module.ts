import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, RecipesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
