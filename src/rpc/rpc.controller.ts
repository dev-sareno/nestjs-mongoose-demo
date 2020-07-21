import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RpcService } from './rpc.service';
import * as rpc_pb from './../protobuf/commonjs/rpc_pb';
const rpcPb = rpc_pb as any;


@Controller('api/rpc')
export class RpcController {

  constructor(
    private readonly rpcService: RpcService,
  ) {
  }

  @Get()
  async rpc(
    @Req() req: Request,
    @Res() res: Response,
    @Query('limit') limit: string,
    @Query('res-type') resType: string,
  ): Promise<void> {
    const result = await this.rpcService.get(Number(limit) || 100);
    const started = new Date().getTime();
    console.log('conversion started', started);

    if (resType === 'blob') {
      /*
      * Convert JSON to ProtoBuf
      * */
      const restaurants = [];
      result.forEach(i => {
        const coordinate = new rpcPb.Restaurant.Location.Coordinate();
        coordinate.setLatlngList([i.location.coordinates[0], i.location.coordinates[1]]);
        const location = new rpcPb.Restaurant.Location();
        location.setType(i.location.type);
        location.setCoordinate(coordinate);
        const restaurant = new rpcPb.Restaurant();
        restaurant.setId(i._id.toString());
        restaurant.setName(i.name);
        restaurant.setLocation(location);
        restaurants.push(restaurant);
      });
      const response = new rpcPb.RpcResponse();
      response.setRestaurantsList(restaurants);

      console.log('conversion ended diff=', new Date().getTime() - started);

      const encode = response.serializeBinary();

      res.status(HttpStatus.OK)
        .type('application/octet-stream')
        .send(Buffer.from(encode));
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

}
