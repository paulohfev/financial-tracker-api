import { Controller, Get } from '@nestjs/common';
import { Bill } from './bill.model';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private billService: BillsService) {}

  @Get()
  getAllTasks(): Bill[] {
    return this.billService.getAllBills();
  }
}
