import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { RpcController } from './rpc/rpc.controller';
import { JsonRpcRequest } from 'typed-rpc/lib/types';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const fastifyInstance = app.getHttpAdapter().getInstance();

  fastifyInstance.post('/v1/rpc', async (request, reply) => {
   const body = request.body as JsonRpcRequest;
    const { method, params, id } = body;

    const rpcController = app.get(RpcController);

    if (method === 'hello') {
      const result = await rpcController.hello();
      reply.send({ jsonrpc: '2.0', result, id });
    } else {
      reply.send({ jsonrpc: '2.0', error: 'Method not found', id });
    }
  });
  await app.listen(3000);
}
bootstrap();
