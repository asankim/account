// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.26.1
// source: proto/account.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'account';

export interface Account {
  id: string;
  accountName: string;
  isActive: boolean;
}

export interface Accounts {
  Accounts: Account[];
}

export interface PostAccountDTO {
  accountName: string;
  isActive: boolean;
}

export interface Empty {}

export const ACCOUNT_PACKAGE_NAME = 'account';

export interface AccountServiceClient {
  postCreateAccount(request: PostAccountDTO): Observable<Account>;

  getAccounts(request: Empty): Observable<Accounts>;
}

export interface AccountServiceController {
  postCreateAccount(
    request: PostAccountDTO,
  ): Promise<Account> | Observable<Account> | Account;

  getAccounts(
    request: Empty,
  ): Promise<Accounts> | Observable<Accounts> | Accounts;
}

export function AccountServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['postCreateAccount', 'getAccounts'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AccountService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('AccountService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ACCOUNT_SERVICE_NAME = 'AccountService';
