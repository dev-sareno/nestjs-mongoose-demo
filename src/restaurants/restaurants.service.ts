import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRestaurant } from './restaurant.schema';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantsService {

  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<IRestaurant>,
  ) { }

  async create(dto: CreateRestaurantDto): Promise<IRestaurant> {
    return new this.restaurantModel(dto).save();
  }

  async getAll(): Promise<IRestaurant[]> {
    return this.restaurantModel.find().exec();
  }

}
