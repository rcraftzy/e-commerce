import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tcpc_loginusuarios', { schema: 'integration' })
export class TcpcLoginUsers {
  @PrimaryGeneratedColumn({ name: 'idUsuario' })
  userId: string;

  @Column('text', { name: 'nombre', nullable: true })
  name: string | null;

  @Column('text', { name: 'usuario' })
  user: string;

  @Column('text', { name: 'clave', comment: 'Campo encripto.' })
  clue: string;

  @Column('text', { name: 'celular', nullable: true })
  cell: string | null;

  @Column('text', { name: 'identificacion', nullable: true })
  TypeOrder: string | null;

  @Column('text', { name: 'tipoInicio' })
  typeStart: string;

  @Index('cod_pais')
  @Column('bigint', { name: 'idPais' })
  idCountry: string;

  @Index('cod_ciudad')
  @Column('bigint', { name: 'idCiudad' })
  idCity: string;

  @Index('cod_punto')
  @Column({ name: 'idPunto' })
  pointid: string;

  @Index('idperfil')
  @Column('bigint', { name: 'idPerfil' })
  profileId: string;

  @Column('text', { name: 'lat', nullable: true })
  years: string | null;

  @Column('text', { name: 'lng', nullable: true })
  lng: string | null;

  @Column('varchar', { name: 'apiGeoGoogle' })
  apiGeoGoogle: string;

  @Column('text', { name: 'keyGoogle' })
  keyGoogle: string;

  @Column('smallint', { name: 'tipoGeo' })
  typeGeo: number;

  @Column('tinyint', { name: 'cambioClave' })
  changekey: number;

  @Column('tinyint', { name: 'login' })
  login: boolean;

  @Column('tinyint', { name: 'suspenso' })
  suspended: boolean;

  @Column('tinyint', { name: 'progresivo' })
  progressive: boolean;

  @Column('tinyint', { name: 'idCdr' })
  idCdr: boolean;

  @Column('tinyint', { name: 'screenAuto' })
  screenAuto: boolean;

  @Column('tinyint', { name: 'grabar' })
  gravedigger: boolean;

  @Column('smallint', { name: 'asesorWeb' })
  webAdvisor: number;

  @Column('datetime', { name: 'fechaUltimoIngreso' })
  DateLastEntry: Date;

  @Column('datetime', { name: 'fechaSalida' })
  departureDate: Date;

  @Column('datetime', { name: 'fechaLimiteIngreso' })
  dateLimitIncome: Date;

  @Column('datetime', { name: 'fechaCrea' })
  dateCreation: Date;

  @Column('tinyint', { name: 'activo' })
  asset: number;

  @Column('datetime', { name: 'fechaActivo' })
  dateActive: Date;
}
