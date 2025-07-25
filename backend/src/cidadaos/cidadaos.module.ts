import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadaosService } from './cidadaos.service';
import { CidadaosController } from './cidadaos.controller';
import { Cidadao } from './cidadaos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cidadao])],
  controllers: [CidadaosController],
  providers: [CidadaosService],
})
export class CidadaosModule {}
