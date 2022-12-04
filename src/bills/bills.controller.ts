import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bill } from './bill.entity';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller('bills')
export class BillsController {
  constructor(private billService: BillsService) {}

  @Get()
  getAllBills(): Promise<Bill[]> {
    return this.billService.getAllBills();
  }

  @Post()
  createBill(@Body() createBillDto: CreateBillDto): Promise<Bill> {
    return this.billService.createBill(createBillDto);
  }
}
