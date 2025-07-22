import { Test, TestingModule } from '@nestjs/testing';
import { CidadaosService } from './cidadaos.service';

describe('CidadaosService', () => {
  let service: CidadaosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CidadaosService],
    }).compile();

    service = module.get<CidadaosService>(CidadaosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
