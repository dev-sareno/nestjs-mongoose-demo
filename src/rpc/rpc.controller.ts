import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { load } from "protobufjs";
import { RpcService } from './rpc.service';

import messages from './protobuf/rpc_pb';
import * as test from './test.js';

@Controller('api/rpc')
export class RpcController {

  constructor(
    private readonly rpcService: RpcService,
  ) {
  }

  private _() {
    load('./src/rpc/protobuf/awesome.proto', function(err, root) {
      if (err) {
        throw err;
      }

      // example code
      const AwesomeMessage = root.lookupType('awesomepackage.AwesomeMessage');

      const message = AwesomeMessage.create({ awesomeField: 'hello' });
      console.log(`message = ${JSON.stringify(message)}`);

      const buffer = AwesomeMessage.encode(message).finish();
      console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

      const decoded = AwesomeMessage.decode(buffer);
      console.log(`decoded = ${JSON.stringify(decoded)}`);
    });
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
      test.test();
      console.log(messages);

      // const restaurants: messages.Restaurant = [];
      // result.forEach(i => {
      //   const coordinate = new messages.Restaurant.Location.Coordinate();
      //   coordinate.setLatlngList([i.location.coordinates[0], i.location.coordinates[1]]);
      //   const location = new messages.Restaurant.Location();
      //   location.setType(i.location.type);
      //   location.setCoordinate(coordinate);
      //   const restaurant = new messages.Restaurant();
      //   restaurant.setId(i._id.toString());
      //   restaurant.setName(i.name);
      //   restaurant.setLocation(location);
      //   restaurants.push(restaurant);
      // });
      // const response = new messages.RpcResponse();
      // response.setRestaurantsList(restaurants);
      //
      // console.log('conversion ended diff=', new Date().getTime() - started);
      //
      // const encode = response.serializeBinary();
      // console.log('encode', encode);
      // console.log(`buffer length = ${Array.prototype.toString.call(encode).length}`);
      //
      // const decoded = RpcResponse.decode(buffer);
      // console.log(`decoded = ${JSON.stringify(decoded)}`);

      // res.status(HttpStatus.OK)
      //   .type('application/octet-stream')
      //   .send(encode);
      res.status(HttpStatus.OK).json(result);
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

}
