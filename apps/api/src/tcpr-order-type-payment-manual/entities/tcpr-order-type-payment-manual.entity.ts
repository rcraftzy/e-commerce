import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('tcpr_ordentipopagomanual', { schema: 'integration' })
export class TcprOrderTypePaymentManual {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Index('nro_orden_general')
  @PrimaryColumn('bigint', {
    name: 'idOrdenGeneralManual',
    default: () => "'0'",
  })
  idOrderGeneralManual: string;

  @Index('idPuntoINordentipopago')
  @PrimaryColumn('bigint', { name: 'idPunto', default: () => "'0'" })
  pointid: string;

  @Column('text', {
    name: 'idOrdenNumero',
  })
  idOrderNumber: string;

  @Column('text', {
    name: 'NomTipoPago',
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
    default: () => "'1981-01-07 00:00:00'",
  })
  dateCreation: Date;
}
