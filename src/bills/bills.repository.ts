import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Bill } from "./bill.entity";

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
}
