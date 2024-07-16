import { Prisma } from '@prisma/client';

export class Account implements Prisma.AccountCreateInput {
  id: string;
  accountName: string;
  isActive: boolean;
}
