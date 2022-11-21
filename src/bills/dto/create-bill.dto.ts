import { IsNotEmpty } from 'class-validator';

export class CreateBillDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  value: number;
}
