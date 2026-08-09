import { Module } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";
import { createLoggerModuleOptions } from "./infrastructure/logging/logger.config";

@Module({
  imports: [LoggerModule.forRoot(createLoggerModuleOptions())]
})
export class AppModule {}
