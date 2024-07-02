import { Injectable } from '@nestjs/common';
import { Account, Accounts, PostAccountDTO } from 'proto/account';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaservice: PrismaService) {}

  async postCreateAccount(postAccountDTO: PostAccountDTO): Promise<Account> {
    return this.prismaservice.account.create({
      data: {
        accountName: postAccountDTO.accountName,
        isActive: postAccountDTO.isActive,
      },
    });
  }

  async getAccounts(): Promise<Account> {
    return { Accounts: this.prismaservice.account.findMany() };
  }
}
