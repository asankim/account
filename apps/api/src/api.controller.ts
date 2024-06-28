import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { PostAccountDTO } from 'proto/account';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  postCreateAccount(@Body() postAccountDTO: PostAccountDTO) {
    return this.apiService.postCreateAccount(postAccountDTO);
  }

  @Get()
  getAccounts() {
    return this.apiService.getAccounts();
  }
}
