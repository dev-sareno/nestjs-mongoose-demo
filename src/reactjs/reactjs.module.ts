import { Module } from '@nestjs/common';
import { ReactjsController } from './reactjs.controller';
import { ReactjsService } from './reactjs.service';

@Module({
  controllers: [ReactjsController],
  providers: [ReactjsService]
})
export class ReactjsModule {}
