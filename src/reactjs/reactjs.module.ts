import { Module } from '@nestjs/common';
import { ReactjsController } from './reactjs.controller';
import { ReactjsService } from './reactjs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoeSchema } from './shoes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Shoe',
        schema: ShoeSchema,
        collection: 'shoes',
      }
    ])
  ],
  controllers: [ReactjsController],
  providers: [ReactjsService]
})
export class ReactjsModule {}
