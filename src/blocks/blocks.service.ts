import { Injectable } from '@nestjs/common';
import { IBlock } from './block.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CreateBlockDto } from './dto/create-block.dto';

@Injectable()
export class BlocksService {

  constructor(
    @InjectModel('Block')
    private readonly blockModel: Model<IBlock>,
  ) {
  }

  async getAll(): Promise<IBlock[]> {
    return this.blockModel.find().exec();
  }

  async create(body: CreateBlockDto): Promise<IBlock> {
    return new this.blockModel(body).save();
  }
}
