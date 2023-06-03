import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpLoginUsersModule } from './tcp-login-users/tcp-login-users.module';
import { TcpcLoginUsers } from './tcp-login-users/entities/tcp-login-user.entity';
import { TcprOrderGeneralModule } from './tcpr-order-general/tcpr-order-general.module';
import { TcprOrderDetailManualModule } from './tcpr-order-detail-manual/tcpr-order-detail-manual.module';
import { TcprOrderGeneral } from './tcpr-order-general/entities/tcpr-order-general.entity';
import { TcprOrderTypePaymentManualModule } from './tcpr-order-type-payment-manual/tcpr-order-type-payment-manual.module';
import { TcprOrderTypePaymentManual } from './tcpr-order-type-payment-manual/entities/tcpr-order-type-payment-manual.entity';
import { TcprOrderDetaileManual } from './tcpr-order-detail-manual/entities/tcpr-order-detail-manual.entity';
import { TcprTrazasdiaModule } from './tcpr-trazasdia/tcpr-trazasdia.module';
import { TcpcItemsModule } from './tcpc-items/tcpc-items.module';
import { TcprOrderTypePaymentModule } from './tcpr-order-type-payment/tcpr-order-type-payment.module';
import { TcprTrazasModule } from './tcpr-trazas/tcpr-trazas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: parseInt(process.env.DB_PORT),
      username: 'integration',
      password: 'integration',
      database: 'integration',
      entities: [
        TcpcLoginUsers,
        TcprOrderGeneral,
        TcprOrderDetaileManual,
        TcprOrderTypePaymentManual,
      ],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    TcpLoginUsersModule,
    TcprOrderGeneralModule,
    TcprOrderDetailManualModule,
    TcprOrderTypePaymentManualModule,
    TcprTrazasdiaModule,
    TcpcItemsModule,
    TcprOrderTypePaymentModule,
    TcprTrazasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
