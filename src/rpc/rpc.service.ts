import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { IRpc } from './rpc.schema';

@Injectable()
export class RpcService {

  constructor(
    @InjectModel('Rpc')
    private readonly rpcModel: Model<IRpc>,
  ) {
  }

  async get(limit: number): Promise<IRpc[]> {
    return this.rpcModel.find().limit(limit).exec();
  }
}
