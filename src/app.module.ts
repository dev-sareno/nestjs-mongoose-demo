import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlocksModule } from './blocks/blocks.module';
import { RpcController } from './rpc/rpc.controller';
import { RpcModule } from './rpc/rpc.module';
import { ReactjsModule } from './reactjs/reactjs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:zNpkSc8St6D6P24P@nestjs-mongoose-demo-kuuqm.mongodb.net/nestjs-mongoose?retryWrites=true&w=majority'),
    RestaurantsModule,
    BlocksModule,
    RpcModule,
    ReactjsModule,
  ],
  controllers: [AppController, RpcController],
  providers: [AppService],
})
export class AppModule {}
