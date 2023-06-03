import {
  Column,
  Index,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Entity,
} from 'typeorm';

@Entity('tcpr_ordendetallemanual', { schema: 'integration' })
export class TcprOrderDetaileManual {
  @Index('id')
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Index('nro_orden_general')
  @PrimaryColumn('bigint', {
    name: 'idOrdenGeneralManual',
  })
  idOrderGeneralManual: string;

  @PrimaryColumn('bigint', { name: 'idPunto' })
  pointid: string;

  @Column('text', {
    name: 'idOrdenNumero',
  })
  idOrderNumber: string;

  @Column('text', {
    name: 'idSkuItem',
  })
  idSkuItem: string;

  @Index('sku_item')
  @Column('varchar', { name: 'skuItem', length: 30 })
  skuItem: string;

  @Column('text', { name: 'itemNombre' })
  itemName: string;

  @Index('tipo_item')
  @Column('varchar', { name: 'tipoItem', length: 3 })
  itemType: string;

  @Column('varchar', { name: 'skuItemPrincipal', length: 30 })
  skuItemPrincipal: string;

  @Column('double', {
    name: 'valorBaseUni',
    comment: 'Precio original',
    precision: 15,
    scale: 2,
  })
  valueBaseUni: number;

  @Column('double', {
    name: 'valorUnitario',
    precision: 15,
    scale: 2,
  })
  valueUnitary: number;

  @Column('double', {
    name: 'porcentajeDescuento',
    comment: 'Pocentaje del descuento del cupón',
    precision: 15,
    scale: 2,
  })
  percentageDiscount: number;

  @Column('double', {
    name: 'valorDescuento',
    comment: 'Monto del descuento del cupón',
    precision: 15,
    scale: 2,
  })
  discountvalue: number;

  @Column('int', { name: 'cantidad' })
  amount: number;

  @Column('double', {
    name: 'valorBaseTotal',
    comment: 'Precio original del producto',
    precision: 15,
    scale: 2,
  })
  valueBaseTotal: number;

  @Column('double', {
    name: 'valorTotal',
    precision: 15,
    scale: 2,
  })
  valueTotal: number;

  @Column('text', { name: 'observacion' })
  observation: string;

  @Column('datetime', {
    name: 'fechaCrea',
  })
  dateCreation: Date;
}
