import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AccountServiceController, PostAccountDTO } from 'proto/account';

@Controller()
export class AppController implements AccountServiceController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AccountService', 'PostCreateAccount')
  async postCreateAccount(postAccountDTO: PostAccountDTO) {
    return await this.appService.postCreateAccount(postAccountDTO);
  }

  @GrpcMethod('AccountService', 'GetAccounts')
  async getAccounts() {
    return await this.appService.getAccounts();
  }
}
