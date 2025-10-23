import { Linea } from 'src/lineas/entities/linea.entity';
import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Punto } from 'src/puntos/entities/punto.entity';
import { CreateLineaDto } from 'src/lineas/dto/create-linea.dto';
import { CreateRutaDto } from './create-ruta.dto';
import { CreateRutaPuntosDto } from './create-ruta-puntos-dto';
import { CreatePuntoDto } from 'src/puntos/dto/create-punto.dto';

export class CreateRutaGeneralDto {
  @IsNotEmpty()
  linea: CreateLineaDto;
  @IsNotEmpty()
  ruta: CreateRutaDto;
  @IsNotEmpty()
  puntos: CreatePuntoDto[];
}
export class UpdateCustomerDto extends PartialType(CreateRutaGeneralDto) {}
