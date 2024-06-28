import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  Account,
  AccountServiceController,
  Accounts,
  PostAccountDTO,
} from 'proto/account';

@Controller()
export class AppController implements AccountServiceController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AccountService', 'PostCreateAccount')
  postCreateAccount(postAccountDTO: PostAccountDTO): Account {
    return this.appService.postCreateAccount(postAccountDTO);
  }

  @GrpcMethod('AccountService', 'GetAccounts')
  getAccounts(): Accounts {
    return this.appService.getAccounts();
  }
}
