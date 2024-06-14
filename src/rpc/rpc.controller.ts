import { Body, Controller, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { JsonRpcRequest } from 'typed-rpc/lib/types';
import { RpcService } from './rpc.service';

@Controller('/v1/rpc')
export class RpcController {
  constructor(private readonly rpcService: RpcService) {}

  @Post()
  async rpc(@Body() body: JsonRpcRequest, @Res() reply: FastifyReply) {
    const { method, params, id } = body;

    if (method === 'hello') {
      const result = this.rpcService.hello();
      reply.send({ jsonrpc: '2.0', result, id });
    } else {
      reply.send({ jsonrpc: '2.0', error: 'Method not found', id });
    }
  }
}
