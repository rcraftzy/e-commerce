import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tcpr_ordentipopago', { schema: 'integration' })
export class TcprOrderTypePayment {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @PrimaryColumn('bigint', { name: 'idPunto', default: () => "'0'" })
  pointid: string;

  @Column('bigint', {
    name: 'idOrdenGeneral',
    comment: 'id de la orden general de la marca interno',
    default: () => "'0'",
  })
  idOrderGeneral: string;

  @Column('text', {
    name: 'idOrdenNumero',
    comment: 'Id que llega de la integracion',
  })
  idOrderNumber: string;

  @PrimaryColumn('int', { name: 'idTipoPago', comment: 'id del tipo de pago ' })
  idTypePay: number;

  @Column('text', {
    name: 'NomTipoPago',
    comment: 'Nombre de la forma de pago que llega en la integracion',
  })
  nomTypePay: string;

  @Column('double', {
    name: 'valor',
    precision: 15,
    scale: 2,
    default: () => "'0.00'",
  })
  value: number;

  @Column('datetime', {
    name: 'fechaCrea',
  })
  dateCreation: Date;
}
