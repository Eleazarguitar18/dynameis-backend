import { BaseEntityAudit } from 'src/common/filters/entities/base-entity.audit';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ruta } from './ruta.entity';
import { Punto } from 'src/puntos/entities/punto.entity';
@Entity({ name: 'ruta_puntos' })
export class RutaPunto extends BaseEntityAudit {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Ruta, (ruta) => ruta.rutaPuntos)
  @JoinColumn({ name: 'id_ruta' })
  ruta: Ruta;
  @ManyToOne(() => Punto, (punto) => punto.rutaPuntos)
  @JoinColumn({ name: 'id_punto' })
  punto: Punto;
  @Column()
  orden: number;
}
