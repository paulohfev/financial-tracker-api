import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bill } from './bill.model';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller('bills')
export class BillsController {
  constructor(private billService: BillsService) {}

  @Get()
  getAllBills(): Bill[] {
    return this.billService.getAllBills();
  }

  @Post()
  createBill(@Body() createBillDto: CreateBillDto): Bill {
    return this.billService.createBill(createBillDto);
  }
}
