import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  ACCOUNT_SERVICE_NAME,
  AccountServiceClient,
  PostAccountDTO,
} from 'proto/account';

@Injectable()
export class ApiService implements OnModuleInit {
  private accountServiceClient: AccountServiceClient;
  constructor(@Inject('account') private clientGrpc: ClientGrpc) {}

  onModuleInit() {
    this.accountServiceClient =
      this.clientGrpc.getService<AccountServiceClient>(ACCOUNT_SERVICE_NAME);
  }

  postCreateAccount(postAccountDTO: PostAccountDTO) {
    return this.accountServiceClient.postCreateAccount(postAccountDTO);
  }

  getAccounts() {
    return this.accountServiceClient.getAccounts({});
  }
}
