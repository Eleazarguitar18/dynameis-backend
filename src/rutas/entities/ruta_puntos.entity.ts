import { BaseEntityAudit } from 'src/common/filters/entities/base-entity.audit';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ruta } from './ruta.entity';
import { Punto } from 'src/puntos/entities/punto.entity';
@Entity({ name: 'ruta_puntos' })
export class RutaPunto extends BaseEntityAudit {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Ruta, { eager: true })
  @JoinColumn({ name: 'id_persona' })
  ruta: Ruta;
  @OneToOne(() => Punto, { eager: true })
  @JoinColumn({ name: 'id_punto' })
  punto: Punto;
  @Column()
  orden: number;
}
