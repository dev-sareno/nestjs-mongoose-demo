import { Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantExistedPipe } from './pipes/restaurant-existed.pipe';

@Controller('api/restaurants')
export class RestaurantsController {

  constructor(
    private readonly restaurantService: RestaurantsService,
  ) { }

  @Post()
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateRestaurantDto,
  ): Promise<void> {
    const result = await this.restaurantService.create(body);
    res.status(HttpStatus.OK).json(result);
  }

  @Get()
  async getAll(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const result = await this.restaurantService.getAll();
    res.status(HttpStatus.OK).json(result);
  }

  @Put(':restaurantId')
  async update(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: UpdateRestaurantDto,
    @Param('restaurantId', RestaurantExistedPipe) restaurantId: string,
  ): Promise<void> {
    await this.restaurantService.updateOne(restaurantId, body);
    res.sendStatus(HttpStatus.OK);
  }

}
