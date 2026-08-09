import type { INestApplication } from "@nestjs/common";
import {
  DocumentBuilder,
  SwaggerModule,
  type OpenAPIObject
} from "@nestjs/swagger";

export function createOpenApiDocument(app: INestApplication): OpenAPIObject {
  const configuration = new DocumentBuilder()
    .setTitle("Sports Academy Platform API")
    .setVersion("1")
    .build();

  return SwaggerModule.createDocument(app, configuration);
}
