import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Req, Res } from '@nestjs/common';
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

  @Get(':blockId')
  async getBlock(
    @Req() req: Request,
    @Res() res: Response,
    @Param('blockId') blockId: string,
  ): Promise<void> {
    const result = await this.blocksService.getBlock(blockId);
    if (!result) {
      throw new NotFoundException(`Block not found. ID=${blockId}`);
    }
    res.status(HttpStatus.OK).json(result);
  }

  @Get(':blockId/points')
  async getBlockPoints(
    @Req() req: Request,
    @Res() res: Response,
    @Param('blockId') blockId: string,
  ): Promise<void> {
    const result = await this.blocksService.getBlockPoints(blockId);
    res.status(HttpStatus.OK).json(result);
  }
}
