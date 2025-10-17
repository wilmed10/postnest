import { Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // asignar url en caso de no ser el principal
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getPost() {
    return 'Desde @Post';
  }

  @Put()
  getPut() {
    return 'Desde @Put';
  }

  @Patch()
  getPatch() {
    return 'Desde @Patch';
  }
}
