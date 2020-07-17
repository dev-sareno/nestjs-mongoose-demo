import { Module } from '@nestjs/common';
import { RpcController } from './rpc.controller';
import { RpcService } from './rpc.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RpcSchema } from './rpc.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: 'Rpc',
        schema: RpcSchema,
        collection: 'test_restaurants',
      }
    ])
  ],
  exports: [RpcService],
  controllers: [
    RpcController,
  ],
  providers: [RpcService]
})
export class RpcModule {}
