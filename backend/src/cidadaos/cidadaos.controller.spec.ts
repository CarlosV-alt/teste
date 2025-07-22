import { Test, TestingModule } from '@nestjs/testing';
import { CidadaosController } from './cidadaos.controller';

describe('CidadaosController', () => {
  let controller: CidadaosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CidadaosController],
    }).compile();

    controller = module.get<CidadaosController>(CidadaosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
