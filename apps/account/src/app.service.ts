import { Injectable } from '@nestjs/common';
import { Account, Accounts, PostAccountDTO } from 'proto/account';
import { PrismaService } from './prisma.service';
import { Account as MAccount } from './Account.model';

@Injectable()
export class AppService {
  constructor(private prismaservice: PrismaService) {}

  async postCreateAccount(postAccountDTO: PostAccountDTO): Promise<Account> {
    const account: MAccount = await this.prismaservice.account.create({
      data: postAccountDTO,
    });

    return {
      id: account.id,
      accountName: account.accountName,
      isActive: account.isActive,
    };
  }

  async getAccounts(): Promise<Accounts> {
    const accounts: MAccount[] = await this.prismaservice.account.findMany();
    return {
      Accounts: accounts.map((acc) => ({
        id: acc.id,
        accountName: acc.accountName,
        isActive: acc.isActive,
      })),
    };
  }
}
