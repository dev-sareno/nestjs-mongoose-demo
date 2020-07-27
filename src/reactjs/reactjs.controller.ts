import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/reactjs')
export class ReactjsController {

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
  ): Promise<void> {
    const shoes = [];
    const brands = ['Nike', 'Adidas', 'Converse'];
    const sizes = [7, 8, 9, 10, 11, 12];
    const colors = ['black', 'white', 'grey', 'maroon'];
    for (let i = 0; i < 50; i++) {
      shoes.push({
        brand: brands[Math.floor(Math.random() * brands.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    res.status(HttpStatus.OK).json(shoes);
  }

}
