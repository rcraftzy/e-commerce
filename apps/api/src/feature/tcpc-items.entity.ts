import {
  Column,
  Entity,
  Index,
  JoinColumn,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tcpc_items', { schema: 'integration' })
export class TcpcItems {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idItem' })
  itemId: number;

  @Column('varchar', { name: 'skuItem', length: 20 })
  skuItem: string;

  @Column('text', { name: 'itemNombre' })
  itemName: string;

  @Column('text', { name: 'descripcion' })
  description: string;

  @PrimaryColumn('int', { name: 'idCategoria' })
  categoryId: number;

  @PrimaryColumn('bigint', { name: 'idMarca' })
  brandId: number;

  @Column('double', { name: 'impuesto' })
  tax: number;

  @Column('text', { name: 'imagen' })
  image: string;

  @Column('int', { name: 'idUtensilio', default: () => "'1'" })
  idTool: number;

  @Column('int', { name: 'cantidadUtensilio', default: () => "'1'" })
  quantityUtensil: number;

  @Column('int', { name: 'puntosRedencion' })
  redemptionPoints: number;

  @Column('varchar', { name: 'idHomologacion' })
  idHomologation: string;

  @Column('varchar', { name: 'idFamilia' })
  idFamily: string;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;

  @Column('tinyint', { name: 'activo' })
  asset: number;

  @Column('datetime', { name: 'fechaInactivo' })
  dateInactive: Date;
}
