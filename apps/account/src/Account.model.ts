import { Prisma } from '@prisma/client';

export class Account implements AccountCreateInput {
  id: number;
  accountName: string;
  isActive: boolean;
}
