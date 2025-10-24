import { PartialType } from '@nestjs/mapped-types';
import { CreateNombreEndpointDto } from './create-nombre_endpoint.dto';

export class UpdateNombreEndpointDto extends PartialType(CreateNombreEndpointDto) {}
