import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './bill.entity';
import { BillsController } from './bills.controller';
import { BillsRepository } from './bills.repository';
import { BillsService } from './bills.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  controllers: [BillsController],
  providers: [BillsService, BillsRepository],
})
export class BillsModule {}
