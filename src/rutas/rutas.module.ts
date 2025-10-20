import { forwardRef, Module } from '@nestjs/common';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { RutaPunto } from './entities/ruta_puntos.entity';
import { PuntosModule } from 'src/puntos/puntos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ruta, RutaPunto]),
    forwardRef(() => PuntosModule),
  ],
  controllers: [RutasController],
  providers: [RutasService],
  exports: [TypeOrmModule, RutasModule],
})
export class RutasModule {}
