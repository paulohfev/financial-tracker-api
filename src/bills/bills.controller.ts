import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bill } from './bill.model';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private billService: BillsService) {}

  @Get()
  getAllBills(): Bill[] {
    return this.billService.getAllBills();
  }

  @Post()
  createBill(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('value') value: number,
  ): Bill {
    return this.billService.createBill(title, description, value);
  }
}
