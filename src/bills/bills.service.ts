import { Injectable } from '@nestjs/common';
import { Bill } from './bill.model';

@Injectable()
export class BillsService {
  // @TODO remove temporary local saving. Connect to DB
  private bills: Bill[] = [];

  getAllBills(): Bill[] {
    return this.bills;
  }
}
