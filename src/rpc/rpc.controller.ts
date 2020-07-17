import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { load } from "protobufjs";
import { RpcService } from './rpc.service'; // respectively "./node_modules/protobufjs"

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
    const root = await load('./src/rpc/protobuf/rpc.proto');
    const RpcResponse = root.lookupType('training.rpc.RpcResponse');

    if (resType === 'blob') {
      /*
      * Convert JSON to ProtoBuf
      * */
      const Coordinate = root.lookupType('training.rpc.Restaurant.Location.Coordinate');
      const Location = root.lookupType('training.rpc.Restaurant.Location');
      const Restaurant = root.lookupType('training.rpc.Restaurant');
      const restaurantsMsg = [];
      result.forEach(i => {
        const coordinatesMsg = Coordinate.create({ latLng: [i.location.coordinates[0], i.location.coordinates[1]] });
        const locationMsg = Location.create({ type: i.location.type, coordinate: coordinatesMsg });
        const restaurantMsg = Restaurant.create({ location: locationMsg, name: i.name, _id: i._id.toString() });
        restaurantsMsg.push(restaurantMsg);
      });
      const message = RpcResponse.create({ restaurants: restaurantsMsg });
      console.log('conversion ended diff=', new Date().getTime() - started);

      const buffer = RpcResponse.encode(message).finish();
      // console.log(`buffer length = ${Array.prototype.toString.call(buffer).length}`);
      //
      // const decoded = RpcResponse.decode(buffer);
      // console.log(`decoded = ${JSON.stringify(decoded)}`);

      res.status(HttpStatus.OK)
        .type('application/octet-stream')
        .send(buffer);
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

}
