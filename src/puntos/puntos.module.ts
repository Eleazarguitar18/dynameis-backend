import { forwardRef, Module } from '@nestjs/common';
import { PuntosService } from './puntos.service';
import { PuntosController } from './puntos.controller';
import { Type } from 'class-transformer';
import { Punto } from './entities/punto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutasModule } from 'src/rutas/rutas.module';
import { Ruta } from 'src/rutas/entities/ruta.entity';
import { RutaPunto } from 'src/rutas/entities/ruta_puntos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Punto, RutaPunto]), RutasModule],
  controllers: [PuntosController],
  providers: [PuntosService],
  exports: [PuntosService],
})
export class PuntosModule {}
