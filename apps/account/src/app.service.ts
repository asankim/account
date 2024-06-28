import { Injectable } from '@nestjs/common';
import { Account, Accounts, PostAccountDTO } from 'proto/account';

@Injectable()
export class AppService {
  private accounts: Account[] = [
    {
      id: 1,
      accountName: 'Account1',
      isActive: true,
    },
  ];

  postCreateAccount(postAccountDTO: PostAccountDTO): Account {
    const account: Account = {
      id: this.accounts.length + 1,
      accountName: postAccountDTO.accountName,
      isActive: postAccountDTO.isActive,
    };
    this.accounts.push(account);
    return account;
  }

  getAccounts(): Accounts {
    return { Accounts: this.accounts };
  }
}
