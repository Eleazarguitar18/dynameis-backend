import { Injectable } from '@nestjs/common';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { Repository } from 'typeorm';
import { LineasService } from 'src/lineas/lineas.service';
import { CreateLineaDto } from 'src/lineas/dto/create-linea.dto';
import { CreateRutaGeneralDto } from './dto/create-ruta-general';
import { Linea } from 'src/lineas/entities/linea.entity';
import { CreatePuntoDto } from 'src/puntos/dto/create-punto.dto';
import { PuntosService } from 'src/puntos/puntos.service';
import { Punto } from 'src/puntos/entities/punto.entity';
import { CreateRutaPuntosDto } from './dto/create-ruta-puntos-dto';
import { RutaPunto } from './entities/ruta_puntos.entity';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Ruta)
    private rutaRepository: Repository<Ruta>,
    @InjectRepository(RutaPunto)
    private rutaPuntoRepository: Repository<RutaPunto>,
    private readonly lineaService: LineasService,
    private readonly puntosService: PuntosService,
  ) {}
  async create(createRutaDto: CreateRutaDto) {
    const ruta: Ruta = this.rutaRepository.create(createRutaDto);
    return this.rutaRepository.save(ruta);
    // return 'This action adds a new ruta';
  }
  async create_ruta_puntos(createRutaPuntosDto: CreateRutaPuntosDto) {
    const rutaPuntos: RutaPunto =
      this.rutaPuntoRepository.create(createRutaPuntosDto);
    return this.rutaPuntoRepository.save(rutaPuntos);
  }
  async create_general(createRutaGeneralDto: CreateRutaGeneralDto) {
    //console.log(createRutaGeneralDto);
    const lineaDto: CreateLineaDto = createRutaGeneralDto.linea;
    const linea: Linea = await this.lineaService.create(lineaDto);
    // createRutaGeneralDto.ruta.linea = linea;
    const rutaDto: CreateRutaDto = createRutaGeneralDto.ruta;
    rutaDto.linea = linea;
    const ruta: Ruta = await this.create(rutaDto);
    const puntosDto: CreatePuntoDto[] = createRutaGeneralDto.puntos;
    let orden = 1;
    const puntos: Punto[] = [];
    for (const puntoDto of puntosDto) {
      const punto: Punto = await this.puntosService.create(puntoDto);
      puntos.push(punto);
      const rutaPuntosDto: CreateRutaPuntosDto = {
        ruta: ruta,
        punto: punto,
        orden: orden++,
      };

      await this.create_ruta_puntos(rutaPuntosDto);
    }
    return {
      status: 201,
      success: true,
      message: 'Se creo la ruta con exito!',
      data: {
        linea: linea,
        ruta: ruta,
        puntos: puntos,
      },
    };
  }

  findAll() {
    return `This action returns all rutas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruta`;
  }

  update(id: number, updateRutaDto: UpdateRutaDto) {
    return `This action updates a #${id} ruta`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruta`;
  }
}
