import { Controller } from '@nestjs/common';
import { RpcService } from './rpc.service';

@Controller('/v1/rpc')
export class RpcController {
  constructor(private readonly rpcService: RpcService) {}

  async hello(){
    return this.rpcService.hello()
  }
}
