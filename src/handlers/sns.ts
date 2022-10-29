import { HttpStatus, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { Handler, SNSEvent } from 'aws-lambda';

import { JSONResponse } from '@lib/json-response';

import { IndexController } from '../index.controller';
import { IndexModule } from '../index.module';

export const handler: Handler = async (event: SNSEvent) => {
  const logger = new Logger('INDEX');
  try {
    const indexContext = await NestFactory.createApplicationContext(
      IndexModule,
    );
    const indexController = indexContext.get(IndexController);

    const message = indexController.getHello();
    logger.log({ event });

    return JSONResponse({ message, statusCode: HttpStatus.OK });
  } catch (error) {
    const message = JSON.stringify(error);
    logger.error(message);

    return JSONResponse({
      message,
    });
  }
};
