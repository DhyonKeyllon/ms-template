import { NestFactory } from '@nestjs/core';

import { IndexModule } from './index.module';

async function bootstrap() {
  const app = await NestFactory.create(IndexModule, {
    logger:
      process.env.NODE_ENV === 'deploy'
        ? ['error', 'warn']
        : ['debug', 'error', 'log', 'verbose', 'warn'],
  });
  await app.listen(3000);
}
bootstrap();
