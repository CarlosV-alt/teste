import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadaosService } from './cidadaos.service';
import { CidadaosController } from './cidadaos.controller';

@Module({
  controllers: [CidadaosController],
  providers: [CidadaosService],
})
export class CidadaosModule {}
