import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './restaurant.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Restaurant',
      schema: RestaurantSchema,
    }
  ])],
  exports: [RestaurantsService],
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
