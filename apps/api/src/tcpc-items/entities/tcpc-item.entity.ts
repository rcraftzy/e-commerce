import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('tcpc_items', { schema: 'integration' })
export class TcpcItems {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idItem' })
  itemId: string;

  @Column('varchar', { name: 'skuItem', length: 20 })
  skuItem: string;

  @Column('text', { name: 'itemNombre' })
  itemName: string;

  @Column('text', { name: 'descripcion' })
  description: string;

  @PrimaryColumn('int', { name: 'idCategoria', default: () => "'1'" })
  idCategory: number;

  @PrimaryColumn('bigint', {
    name: 'idMarca',
    comment: 'Marca del cliente',
    unsigned: true,
    default: () => "'1'",
  })
  idBrand: string;

  @Column('double', {
    name: 'impuesto',
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  tax: number;

  @Column('text', { name: 'imagen' })
  image: string;

  @Column('int', { name: 'idUtensilio', default: () => "'1'" })
  utensilId: number;

  @Column('int', { name: 'cantidadUtensilio', default: () => "'1'" })
  quantityUtensil: number;

  @Column('int', {
    name: 'puntosRedencion',
    comment: 'Puntos para poder redimir cada producto en el punto de venta',
    default: () => "'0'",
  })
  redemptionPoints: number;

  @Column('varchar', {
    name: 'idHomologacion',
    comment: 'Campo para homologar codigo de productos',
    length: 10,
    default: () => "'0'",
  })
  homologationId: string;

  @Column('varchar', {
    name: 'idFamilia',
    comment: 'Campo para las familias del POS',
    length: 15,
    default: () => "'0'",
  })
  idFamily: string;

  @Column('datetime', {
    name: 'fechaCrea',
    comment: 'Guarda fecha y hora de la creacion',
  })
  dateCreation: Date;

  @Column('tinyint', { name: 'activo', default: () => "'1'" })
  asset: number;

  @Column('datetime', {
    name: 'fechaInactivo',
  })
  dateInactive: Date;
}
