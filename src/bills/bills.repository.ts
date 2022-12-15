import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Bill } from './bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class BillsRepository extends Repository<Bill> {
  constructor(private dataSource: DataSource) {
    super(Bill, dataSource.createEntityManager());
  }

  async getBills(): Promise<Bill[]> {
    const query = this.createQueryBuilder('bill');

    const bills = await query.getMany();
    return bills;
  }

  async createBill(createBillDto: CreateBillDto): Promise<Bill> {
    const { title, description, value } = createBillDto;

    const bill = this.create({
      title,
      description,
      value,
    });

    await this.save(bill);
    return bill;
  }

  async deleteBill(id: string): Promise<void> {
    await this.delete(id);
  }
}
