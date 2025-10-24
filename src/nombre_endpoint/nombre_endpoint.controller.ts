import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NombreEndpointService } from './nombre_endpoint.service';
import { CreateNombreEndpointDto } from './dto/create-nombre_endpoint.dto';
import { UpdateNombreEndpointDto } from './dto/update-nombre_endpoint.dto';

@Controller('nombre-endpoint')
export class NombreEndpointController {
  constructor(private readonly nombreEndpointService: NombreEndpointService) {}

  @Post()
  create(@Body() createNombreEndpointDto: CreateNombreEndpointDto) {
    return this.nombreEndpointService.create(createNombreEndpointDto);
  }

  @Get()
  findAll() {
    return this.nombreEndpointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nombreEndpointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNombreEndpointDto: UpdateNombreEndpointDto) {
    return this.nombreEndpointService.update(+id, updateNombreEndpointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nombreEndpointService.remove(+id);
  }
}
