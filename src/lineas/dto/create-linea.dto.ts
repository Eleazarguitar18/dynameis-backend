import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateLineaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  numero: string;
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  color: string;
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  descripcion: string;
  estado: boolean = true;
  id_user_create: number;
  id_user_update?: number;
}
export class UpdateCustomerDto extends PartialType(CreateLineaDto) {}
