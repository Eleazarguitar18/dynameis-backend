import { BaseEntityAudit } from 'src/common/filters/entities/base-entity.audit';
import { Linea } from 'src/lineas/entities/linea.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'ruta' })
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

  // @OneToMany(() => RutaPunto, (rutaPunto) => rutaPunto.ruta)
  // rutaPuntos: RutaPunto[];
}
