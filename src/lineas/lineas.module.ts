import { forwardRef, Module } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { LineasController } from './lineas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Linea } from './entities/linea.entity';
import { RutasModule } from 'src/rutas/rutas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Linea]), forwardRef(() => RutasModule)],
  controllers: [LineasController],
  providers: [LineasService],
  exports: [LineasService, LineasModule],
})
export class LineasModule {}
