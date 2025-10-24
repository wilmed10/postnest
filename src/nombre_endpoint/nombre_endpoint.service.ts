import { Injectable } from '@nestjs/common';
import { CreateNombreEndpointDto } from './dto/create-nombre_endpoint.dto';
import { UpdateNombreEndpointDto } from './dto/update-nombre_endpoint.dto';

@Injectable()
export class NombreEndpointService {
  create(createNombreEndpointDto: CreateNombreEndpointDto) {
    return 'This action adds a new nombreEndpoint';
  }

  findAll() {
    return `This action returns all nombreEndpoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nombreEndpoint`;
  }

  update(id: number, updateNombreEndpointDto: UpdateNombreEndpointDto) {
    return `This action updates a #${id} nombreEndpoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} nombreEndpoint`;
  }
}
