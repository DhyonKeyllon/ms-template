import { Controller, Get } from '@nestjs/common';

import { IndexService } from './index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  public getHello(): string {
    return this.indexService.getHello();
  }
}
