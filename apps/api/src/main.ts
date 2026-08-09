import "reflect-metadata";
import { ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { Logger } from "nestjs-pino";

import { AppModule } from "./app.module";
import { ApiExceptionFilter } from "./common/http/api-exception.filter";
import { readRuntimeConfig } from "./config/runtime-config";
import { createOpenApiDocument } from "./infrastructure/openapi/openapi.config";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );
  app.useGlobalFilters(new ApiExceptionFilter(app.get(HttpAdapterHost)));
  app.enableShutdownHooks();

  createOpenApiDocument(app);

  await app.listen(readRuntimeConfig().apiPort);
}

void bootstrap().catch((error: unknown) => {
  process.stderr.write(`Fatal startup error: ${String(error)}\n`);
  process.exitCode = 1;
});
