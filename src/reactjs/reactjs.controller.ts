import { Body, Controller, Get, HttpStatus, ParseIntPipe, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ReactjsService } from './reactjs.service';
import { IShoe } from './shoes.schema';
import { CreateShoeDto } from './dto/create-shoe.dto';

@Controller('api/reactjs')
export class ReactjsController {

  constructor(
    private readonly reactjsService: ReactjsService,
  ) {
  }

  @Post('login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: { username: string, password: string },
  ): Promise<void> {
    const { username, password } = body;
    if (username === 'admin' && password === '1234') {
      res.status(HttpStatus.OK).json({
        token: `token-${new Date().getTime()}`,
      });
    } else {
      res.sendStatus(HttpStatus.FORBIDDEN);
    }
  }

  @Get('shoes')
  async getShoes(
    @Req() req: Request,
    @Res() res: Response,
    @Query('limit') limit: number
  ): Promise<void> {
    const result = await this.reactjsService.getShoes(Number(limit) || 100);
    res.status(HttpStatus.OK).json(result);
  }

  @Post('shoes')
  async createShoe(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateShoeDto,
  ): Promise<void> {
    const result = await this.reactjsService.createShoe(body);
    res.status(HttpStatus.OK).json(result);
  }

}
