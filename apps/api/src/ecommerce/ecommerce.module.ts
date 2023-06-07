import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TcprTrazasdia } from 'src/feature/tcpr-trazasdia.entity';
import { TcpcItemsModule } from './tcpc-items/tcpc-items.module';
import { TcpcLoginUsersModule } from './tcpc-login-users/tcpc-login-users.module';
import { TcprClientModule } from './tcpr-client/tcpr-client.module';
import { TcprOrderDetailManualModule } from './tcpr-order-detail-manual/tcpr-order-detail-manual.module';
import { TcprOrderDetailModule } from './tcpr-order-detail/tcpr-order-detail.module';
import { TcprOrderGeneralManualModule } from './tcpr-order-general-manual/tcpr-order-general-manual.module';
import { TcprOrderGeneralModule } from './tcpr-order-general/tcpr-order-general.module';
import { TcprOrderTypePaymentModule } from './tcpr-order-type-payment/tcpr-order-type-payment.module';
import { TcprTrazasModule } from './tcpr-trazas/tcpr-trazas.module';
import { TcprTrazasdiaModule } from './tcpr-trazasdia/tcpr-trazasdia.module';
@Module({
  imports: [
    TcpcItemsModule,
    TcpcLoginUsersModule,
    TcprClientModule,
    TcprOrderDetailManualModule,
    TcprOrderDetailModule,
    TcprOrderGeneralManualModule,
    TcprOrderGeneralModule,
    TcprOrderTypePaymentModule,
    TcprTrazasModule,
    TcprTrazasdiaModule,
  ],
})
export class EcommerceModule {}
