import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { Request, Response } from 'express';
import { CreateBlockDto } from './dto/create-block.dto';

@Controller('api/blocks')
export class BlocksController {

  constructor(
    private blocksService: BlocksService,
  ) { }

  @Get()
  async getAll(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const result = await this.blocksService.getAll();
    res.status(HttpStatus.OK).json(result);
  }

  @Post()
  async createBlock(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateBlockDto,
  ): Promise<void> {
    const result = await this.blocksService.create(body);
    res.status(HttpStatus.OK).json(result);
  }
}
