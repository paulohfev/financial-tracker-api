import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getBillById(@Param('id') id: string): Promise<Bill> {
    return this.billService.getBillById(id);
  }

  @Post()
  createBill(@Body() createBillDto: CreateBillDto): Promise<Bill> {
    return this.billService.createBill(createBillDto);
  }

  @Delete('/:id')
  deleteBill(@Param('id') id: string): Promise<void> {
    return this.billService.deleteBill(id);
  }
}
