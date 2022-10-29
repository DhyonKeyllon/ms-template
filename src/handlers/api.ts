import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import type { Handler, Context, APIGatewayEvent } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import express from 'express';
import { Server } from 'http';

import { IndexModule } from '@index/index.module';

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const app = await NestFactory.create<NestExpressApplication>(
      IndexModule,
      new ExpressAdapter(expressApp),
      {
        logger:
          process.env.NODE_ENV === 'deploy'
            ? ['error', 'warn']
            : ['debug', 'error', 'log', 'verbose', 'warn'],
      },
    );
    app.use(eventContext());
    await app.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
