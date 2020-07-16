import { Injectable, NotFoundException } from '@nestjs/common';
import { IBlock } from './block.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlockDto } from './dto/create-block.dto';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { IRestaurant } from '../restaurants/restaurant.schema';

@Injectable()
export class BlocksService {

  constructor(
    @InjectModel('Block')
    private readonly blockModel: Model<IBlock>,
    private readonly restaurantService: RestaurantsService,
  ) {
  }

  async getAll(): Promise<IBlock[]> {
    return this.blockModel.find().exec();
  }

  async create(body: CreateBlockDto): Promise<IBlock> {
    return new this.blockModel(body).save();
  }

  async getBlock(blockId: string): Promise<IBlock> {
    return this.blockModel.findOne({ _id: { $eq: blockId } }).exec();
  }

  async getBlockPoints(blockId: string): Promise<IRestaurant[]> {
    const block = await this.getBlock(blockId);
    if (!block) {
      throw new NotFoundException(`Block not found. ID=${blockId}`);
    }
    return this.restaurantService.getPoints(block.geometry);
  }
}
