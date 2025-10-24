import { Test, TestingModule } from '@nestjs/testing';
import { NombreEndpointService } from './nombre_endpoint.service';

describe('NombreEndpointService', () => {
  let service: NombreEndpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NombreEndpointService],
    }).compile();

    service = module.get<NombreEndpointService>(NombreEndpointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
