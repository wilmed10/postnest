import { Test, TestingModule } from '@nestjs/testing';
import { NombreEndpointController } from './nombre_endpoint.controller';
import { NombreEndpointService } from './nombre_endpoint.service';

describe('NombreEndpointController', () => {
  let controller: NombreEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NombreEndpointController],
      providers: [NombreEndpointService],
    }).compile();

    controller = module.get<NombreEndpointController>(NombreEndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
