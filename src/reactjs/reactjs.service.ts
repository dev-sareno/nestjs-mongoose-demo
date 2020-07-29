import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { IShoe } from './shoes.schema';
import { CreateShoeDto } from './dto/create-shoe.dto';

@Injectable()
export class ReactjsService {

  constructor(
    @InjectModel('Shoe')
    private readonly shoeModel: Model<IShoe>
  ) {
  }

  async getShoes(limit: number): Promise<IShoe[]> {
    return this.shoeModel.find().limit(limit).exec();
  }

  async createShoe(dto: CreateShoeDto): Promise<IShoe> {
    return new this.shoeModel(dto).save();
  }

}
