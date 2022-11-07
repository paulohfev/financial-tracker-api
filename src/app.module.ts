import { Module } from '@nestjs/common';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [BillsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
