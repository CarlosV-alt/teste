import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CidadaosModule } from './cidadaos/cidadaos.module';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { AtendimentosModule } from './atendimentos/atendimentos.module';
import { Cidadao } from './cidadaos/cidadaos.entity';
import { Profissional } from './profissionais/profissionais.entity';
import { Atendimento } from './atendimentos/atendimentos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Carlos123',
      database: 'teste',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true}),
    CidadaosModule,
    ProfissionaisModule,
    AtendimentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}