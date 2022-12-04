import { Injectable } from '@nestjs/common';
import { Bill } from './bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';
import { BillsRepository } from './bills.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(BillsRepository)
    private billsRepository: BillsRepository,
  ) {}
  async getAllBills(): Promise<Bill[]> {
    return await this.billsRepository.getBills();
  }

  async createBill(createBillDto: CreateBillDto): Promise<Bill> {
    return await this.billsRepository.createBill(createBillDto);
  }
}
