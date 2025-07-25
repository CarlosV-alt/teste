import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfissionaisController } from './profissionais.controller';
import { ProfissionaisService } from './profissionais.service';
import { Profissional } from './profissionais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profissional])],
  controllers: [ProfissionaisController],
  providers: [ProfissionaisService]
})
export class ProfissionaisModule {}
