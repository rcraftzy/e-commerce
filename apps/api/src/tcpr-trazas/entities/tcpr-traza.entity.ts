import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('TcprTraza', { schema: 'integration' })
export class TcprTrazas {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'autonumerico',
  })
  id: string;

  @PrimaryColumn('bigint', { name: 'idCliente', default: () => "'0'" })
  idCustomer: string;

  @PrimaryColumn('bigint', {
    name: 'idPunto',
    comment: 'id de la tienda, punto o restaurante',
    default: () => "'0'",
  })
  pointid: string;

  @Column('bigint', {
    name: 'idPuntoOrigen',
    comment:
      'id de la tienda, punto o restaurante de donde se genera el traslado',
  })
  idPointOrigin: string;

  @PrimaryColumn('bigint', {
    name: 'idOrdenGeneral',
    comment: 'Numero de la orden del pedido',
    default: () => "'0'",
  })
  idOrderGeneral: string;

  @Column('int', {
    name: 'idTraza',
    comment: 'id de la traza que se le realiza a la orden',
    unsigned: true,
    default: () => "'0'",
  })
  idTraza: number;

  @PrimaryColumn('int', {
    name: 'idIncidente',
    comment: 'Guarda el id del incidente presentado en la entrega de la orden',
    default: () => "'1'",
  })
  incidentid: number;

  @Column('text', {
    name: 'observaciones',
    comment: 'Guarda las observaciones en la traza',
  })
  observations: string;

  @Column('bigint', {
    name: 'idDomiciliario',
    comment: 'Guarda el id del motorizados que lleva el pedido',
    default: () => "'0'",
  })
  idDomiciliary: string;

  @PrimaryColumn('bigint', {
    name: 'idUsuario',
    comment: 'id de usuario que realiza la traza',
    unsigned: true,
    default: () => "'1'",
  })
  userId: string;

  @PrimaryColumn('bigint', {
    name: 'idUsuarioTraslado',
    comment: 'id de usuario que realiza el traslado de la orden',
    unsigned: true,
    default: () => "'1'",
  })
  idUserTransfer: string;

  @PrimaryColumn('bigint', {
    name: 'idUsuarioCancela',
    comment: 'id de usuario que realiza la cancelacion de la orden',
    unsigned: true,
    default: () => "'1'",
  })
  idUserCancel: string;

  @Column('datetime', {
    name: 'fechaInicio',
    comment: 'Fecha y hora de inicio a la traza',
  })
  dateStart: Date;

  @Column('datetime', {
    name: 'fechaFin',
    comment: 'Fecha y hora de finalizacion a la traza',
  })
  dateFin: Date;

  @Column('datetime', {
    name: 'fechaTraslado',
    comment: 'Fecha y hora del traslado de la orden',
  })
  closeTransfer: Date;

  @Column('datetime', {
    name: 'fechaCancela',
    comment: 'Fecha y hora de la cancelacion de la orden',
  })
  closeCancel: Date;
}
