import { Injectable } from '@nestjs/common';

@Injectable()
export class RpcService {
  hello() {
    return `Hello World`;
  }
}
