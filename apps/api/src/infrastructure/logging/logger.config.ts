import { randomUUID } from "node:crypto";
import { readRuntimeConfig } from "../../config/runtime-config";

export function createLoggerModuleOptions() {
  const { logLevel } = readRuntimeConfig();

  return {
    pinoHttp: {
      level: logLevel,
      genReqId(req: { headers: Record<string, string | string[] | undefined> }, res: { setHeader(name: string, value: string): void }) {
        const incoming = req.headers["x-request-id"];
        const requestId =
          typeof incoming === "string" && incoming.length > 0
            ? incoming
            : randomUUID();

        res.setHeader("x-request-id", requestId);
        return requestId;
      },
      redact: {
        paths: ["req.headers.authorization", "req.headers.cookie"],
        censor: "[Redacted]"
      }
    }
  };
}
