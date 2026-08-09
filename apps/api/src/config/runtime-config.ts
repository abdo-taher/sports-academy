function readPort(value: string | undefined): number {
  const port = Number(value ?? "3001");

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("API_PORT must be an integer between 1 and 65535.");
  }

  return port;
}

export function readRuntimeConfig() {
  return {
    apiPort: readPort(process.env.API_PORT),
    logLevel: process.env.LOG_LEVEL ?? "info"
  } as const;
}
