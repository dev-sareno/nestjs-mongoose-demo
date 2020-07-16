import { Module } from '@nestjs/common';
import { BlocksController } from './blocks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockSchema } from './block.schema';
import { BlocksService } from './blocks.service';
import { RestaurantsModule } from '../restaurants/restaurants.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Block',
        schema: BlockSchema,
      }
    ]),
    RestaurantsModule,
  ],
  exports: [],
  providers:[BlocksService],
  controllers: [
    BlocksController,
  ],
})
export class BlocksModule {}
