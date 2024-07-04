import { Prisma } from '@prisma/client';

export class Account implements Prisma.AccountCreateInput {
  id: number;
  accountName: string;
  isActive: boolean;
}
