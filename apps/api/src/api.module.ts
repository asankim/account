import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'account',
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../account.proto'),
          package: 'account',
        },
      },
    ]),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
