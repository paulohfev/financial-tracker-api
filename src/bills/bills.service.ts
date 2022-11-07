import { Injectable } from '@nestjs/common';
import { Bill } from './bill.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BillsService {
  // @TODO remove temporary local saving. Connect to DB
  private bills: Bill[] = [];

  getAllBills(): Bill[] {
    return this.bills;
  }

  createBill(title: string, description: string, value: number): Bill {
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
