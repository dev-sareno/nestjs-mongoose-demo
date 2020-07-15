import { Module } from '@nestjs/common';
import { BlocksController } from './blocks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockSchema } from './block.schema';
import { BlocksService } from './blocks.service';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Block',
      schema: BlockSchema,
    }
  ])],
  exports: [],
  providers:[BlocksService],
  controllers: [
    BlocksController,
  ],
})
export class BlocksModule {}
