import { BaseEntityAudit } from 'src/common/filters/entities/base-entity.audit';
import { Ruta } from 'src/rutas/entities/ruta.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'linea' })
export class Linea extends BaseEntityAudit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  numero: string;
  @Column({ length: 100 })
  color: string;
  // CODIGO DE COLOR EN HEXADECIMAL PARA EL FRONT
  @Column({ length: 150 })
  descripcion: string;

  // Entidad Linea
  @OneToMany(() => Ruta, (ruta) => ruta.linea)
  rutas: Ruta[];
}
