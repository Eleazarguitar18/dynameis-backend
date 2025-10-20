import { forwardRef, Module } from '@nestjs/common';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { RutaPunto } from './entities/ruta_puntos.entity';
import { PuntosModule } from 'src/puntos/puntos.module';
import { Punto } from 'src/puntos/entities/punto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ruta, RutaPunto, Punto]), PuntosModule],
  controllers: [RutasController],
  providers: [RutasService],
  exports: [TypeOrmModule, RutasModule],
})
export class RutasModule {}
