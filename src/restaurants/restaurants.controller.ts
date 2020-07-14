import { Body, Controller, Get, HttpStatus, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

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
    console.log(result);
    res.status(HttpStatus.OK).json(result);
  }

  @Get()
  async getAll(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const result = await this.restaurantService.getAll();
    console.log(result);
    res.status(HttpStatus.OK).json(result);
  }

  @Put()
  async update(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: UpdateRestaurantDto,
  ): Promise<void> {
    await this.restaurantService.updateOne(body);
    res.sendStatus(HttpStatus.OK);
  }

}
