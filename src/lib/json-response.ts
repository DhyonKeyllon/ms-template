import { HttpStatus } from '@nestjs/common';

export function JSONResponse<T>({
  message,
  statusCode,
}: {
  message?: string | Record<string, T>;
  statusCode?: HttpStatus;
}) {
  return {
    body: JSON.stringify(message ?? ''),
    statusCode: statusCode ?? HttpStatus.NO_CONTENT,
  };
}
