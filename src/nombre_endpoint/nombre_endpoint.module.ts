import { Module } from '@nestjs/common';
import { NombreEndpointService } from './nombre_endpoint.service';
import { NombreEndpointController } from './nombre_endpoint.controller';

@Module({
  controllers: [NombreEndpointController],
  providers: [NombreEndpointService],
})
export class NombreEndpointModule {}
