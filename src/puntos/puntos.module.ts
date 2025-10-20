import { forwardRef, Module } from '@nestjs/common';
import { PuntosService } from './puntos.service';
import { PuntosController } from './puntos.controller';
import { Punto } from './entities/punto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutasModule } from 'src/rutas/rutas.module';
import { RutaPunto } from 'src/rutas/entities/ruta_puntos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Punto, RutaPunto]),
    forwardRef(() => RutasModule),
  ],
  controllers: [PuntosController],
  providers: [PuntosService],
  exports: [PuntosService, PuntosModule, TypeOrmModule],
})
export class PuntosModule {}
