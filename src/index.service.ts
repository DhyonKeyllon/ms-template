import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  public getHello(): string {
    return 'Hello World!';
  }
}
