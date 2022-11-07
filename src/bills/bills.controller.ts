import { Controller } from '@nestjs/common';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private billService: BillsService) {}
}
