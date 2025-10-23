import { Linea } from 'src/lineas/entities/linea.entity';
import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Punto } from 'src/puntos/entities/punto.entity';

export class CreateRutaDto {
  @IsString()
  @IsNotEmpty()
  sentido: string;
  @IsString()
  @IsNotEmpty()
  orden: string;
  @IsString()
  @IsNotEmpty()
  descripcion: string;
  @IsNotEmpty()
  linea: Linea;
  // @IsNotEmpty()
  // puntos: Punto[];
}
export class UpdateCustomerDto extends PartialType(CreateRutaDto) {}
