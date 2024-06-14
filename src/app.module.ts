import { Module } from '@nestjs/common';
import { RpcService } from './rpc/rpc.service';
import { RpcController } from './rpc/rpc.controller';

@Module({
  imports: [],
  controllers: [RpcController],
  providers: [RpcService],
})
export class AppModule {}
