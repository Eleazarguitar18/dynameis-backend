import { BaseEntityAudit } from 'src/common/filters/entities/base-entity.audit';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ruta } from './ruta.entity';
import { Punto } from 'src/puntos/entities/punto.entity';
@Entity({ name: 'ruta_puntos' })
export class RutaPunto extends BaseEntityAudit {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Ruta, { eager: true })
  @JoinColumn({ name: 'id_ruta' })
  ruta: Ruta;
  @ManyToOne(() => Punto, { eager: true })
  @JoinColumn({ name: 'id_punto' })
  punto: Punto;
  @Column()
  orden: number;
}
