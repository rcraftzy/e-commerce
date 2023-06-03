import {
  Column,
  Index,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Entity,
} from 'typeorm';
@Entity('tcpr_ordengeneral', { schema: 'integration' })
export class TcprOrderGeneral {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @PrimaryColumn('bigint', { name: 'idCliente', default: () => "'0'" })
  idCustomer: string;

  @Column('bigint', {
    name: 'idMarca',
  })
  idBrand: string;

  @Column('text', {
    name: 'idMarcaAgregador',
  })
  idBrandAggregator: string;

  @Index('idAgregador')
  @PrimaryColumn('bigint', { name: 'idAgregador' })
  idAggregator: string;

  @Index('idPunto')
  @PrimaryColumn('bigint', {
    name: 'idPunto',
  })
  pointid: string;

  @Index('idMultiPuntoorg')
  @PrimaryColumn('bigint', {
    name: 'idMultiPunto',
  })
  idMultiPoint: string;

  @Index('nro_orden_dia')
  @Column('bigint', {
    name: 'idOrdenDia',
  })
  idOrderDia: string;

  @Index('nro_orden_general')
  @Column('bigint', {
    name: 'idOrdenGeneral',
  })
  idOrderGeneral: string;

  @Column('text', { name: 'idOrdenNumero' })
  idOrderNumber: string;

  @Column('text', { name: 'nombreCliente' })
  clientName: string;

  @Column('text', { name: 'empresa' })
  company: string;

  @Column('text', { name: 'identificacion' })
  TypeOrder: string;

  @Column('varchar', { name: 'telefonoFijo', length: 20, default: () => "'0'" })
  phoneFijo: string;

  @Column('varchar', {
    name: 'telefonoCelular',
    length: 20,
  })
  cellPhone: string;

  @Column('bigint', { name: 'idCiudad' })
  idCity: string;

  @Column('text', { name: 'direccion' })
  address: string;

  @Column('text', { name: 'barrio' })
  neighborhood: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', {
    name: 'lat',
  })
  years: string | null;

  @Column('text', {
    name: 'lng',
  })
  lng: string | null;

  @Column('varchar', {
    name: 'nomTipoEntrega',
  })
  nomTypeDelivery: string | null;

  @Column('double', {
    name: 'valorItems',
  })
  valorItems: number;

  @Column('double', {
    name: 'valorDomicilio',
  })
  valorDomicile: number;

  @Column('double', {
    name: 'valorPropina',
  })
  valuable: number;

  @Column('double', {
    name: 'valorBaseItems',
  })
  valorBaseItems: number;

  @Column('double', {
    name: 'valorBaseTotalOrden',
  })
  valorBaseTotalOrder: number;

  @Column('double', {
    name: 'valorDescuento',
  })
  discountvalue: number;

  @Column('double', {
    name: 'valorOrden',
  })
  valueOrder: number;

  @Column('double', {
    name: 'totalOrden',
  })
  totalOrder: number;

  @Column('double', {
    name: 'valorIngresaCli',
  })
  valueIngressCli: number;

  @Index('idtipoVentaTog')
  @PrimaryColumn('tinyint', {
    name: 'idTipoVenta',
  })
  idTypeSale: number;

  @Index('estado_orden')
  @PrimaryColumn('tinyint', {
    name: 'idEstadoOrden',
  })
  idStateOrder: number;

  @PrimaryColumn('tinyint', {
    name: 'idEstadoPos',
  })
  idStatePos: number;

  @Column('text', { name: 'idCupon' })
  idCoupon: string;

  @Column('text', { name: 'nombreCupon' })
  nameCoupon: string;

  @Index('impresion')
  @Column('tinyint', { name: 'impresion' })
  impression: number;

  @Column('tinyint', { name: 'impresionLogistica' })
  impresionLogistics: number;

  @Column('int', { name: 'idLogistica' })
  idLogistics: number;

  @Index('domiciliario')
  @Column('bigint', { name: 'idDomiciliario' })
  idDomiciliary: string;

  @Column('text', { name: 'factura', nullable: true })
  bill: string | null;

  @Column('text', { name: 'observaciones', nullable: true })
  observations: string | null;

  @Index('idUsuarioTog')
  @PrimaryColumn('bigint', {
    name: 'idUsuario',
  })
  userId: string;

  @Index('idUsuarioCancelTog')
  @Column('bigint', {
    name: 'idUsuarioCancel',
    default: () => "'1'",
  })
  idCancelCancel: string;

  @Column('datetime', {
    name: 'fechaEstado',
  })
  closeState: Date;

  @Column('datetime', {
    name: 'fechaFactura',
  })
  closeInvoice: Date;

  @Column('datetime', {
    name: 'fechaOrden',
  })
  dateOrder: Date;

  @Column('datetime', {
    name: 'fechaCrea',
  })
  dateCreation: Date;

  //   @PrimaryColumn({ name: 'idUsuarioCancel' })
  //   idCancelCancel2: number;
}
