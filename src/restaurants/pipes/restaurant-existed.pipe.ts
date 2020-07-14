import { ArgumentMetadata, BadRequestException, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from "mongoose";
import { IRestaurant } from '../restaurant.schema';

@Injectable()
export class RestaurantExistedPipe implements PipeTransform {

  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<IRestaurant>,
  ) {
  }

  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (!value || typeof value !== 'string' || !Types.ObjectId.isValid(value)) {
      throw new BadRequestException(`Invalid restaurant ID ${value}`);
    }

    const result = await this.restaurantModel.findOne({ _id: { $eq: value } });
    if (!result) {
      throw new NotFoundException(`Restaurant not found. ID=${value}`);
    }

    return value;
  }

}
