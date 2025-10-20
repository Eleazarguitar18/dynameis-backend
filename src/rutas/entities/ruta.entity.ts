import { BaseEntityAudit } from 'src/common/filters/entities/base-entity.audit';
import { Linea } from 'src/lineas/entities/linea.entity';
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
import { RutaPunto } from './ruta_puntos.entity';
export class Ruta extends BaseEntityAudit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  sentido: string;
  @Column({ nullable: true })
  orden: string;
  @Column({ nullable: true })
  descripcion: string;

  @ManyToOne(() => Linea, (linea) => linea.rutas)
  @JoinColumn({ name: 'id_linea' })
  linea: Linea;

  @OneToMany(() => RutaPunto, (rutaPunto) => rutaPunto.ruta)
  rutaPuntos: RutaPunto[];
}
