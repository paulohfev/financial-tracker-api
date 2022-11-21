import { Injectable } from '@nestjs/common';
import { Bill } from './bill.model';
import { v4 as uuid } from 'uuid';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class BillsService {
  // @TODO remove temporary local saving. Connect to DB
  private bills: Bill[] = [];

  getAllBills(): Bill[] {
    return this.bills;
  }

  createBill(createBillDto: CreateBillDto): Bill {
    const { title, description, value } = createBillDto;

    const bill: Bill = {
      id: uuid(),
      title,
      description,
      value,
    }

    this.bills.push(bill);
    return bill;
  }
}
