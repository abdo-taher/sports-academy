import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  type ExceptionFilter
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

type ErrorPayload = {
  code?: unknown;
  message?: unknown;
  fieldErrors?: unknown;
};

type RequestLike = {
  id?: unknown;
  headers?: Record<string, unknown>;
};

const toMessage = (value: unknown, fallback: string): string => {
  if (typeof value === "string" && value.length > 0) return value;
  if (Array.isArray(value)) {
    const messages = value.filter((item): item is string => typeof item === "string");
    if (messages.length > 0) return messages.join("; ");
  }
  return fallback;
};

const requestIdOf = (request: RequestLike): string => {
  if (typeof request.id === "string" && request.id.length > 0) return request.id;

  const header = request.headers?.["x-request-id"];
  if (typeof header === "string" && header.length > 0) return header;
  if (Array.isArray(header) && typeof header[0] === "string" && header[0].length > 0) {
    return header[0];
  }

  return "missing-request-id";
};

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  constructor(private readonly adapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const rawResponse =
      exception instanceof HttpException ? exception.getResponse() : undefined;

    const payload: ErrorPayload =
      typeof rawResponse === "object" &&
      rawResponse !== null &&
      !Array.isArray(rawResponse)
        ? (rawResponse as ErrorPayload)
        : {};

    const fallbackMessage =
      status === HttpStatus.INTERNAL_SERVER_ERROR
        ? "Internal server error"
        : exception instanceof HttpException
          ? exception.message
          : "Request failed";

    const message = toMessage(
      payload.message ?? (typeof rawResponse === "string" ? rawResponse : undefined),
      fallbackMessage
    );

    const code =
      typeof payload.code === "string" && payload.code.length > 0
        ? payload.code
        : `HTTP_${status}`;

    const http = host.switchToHttp();
    const request = http.getRequest<RequestLike>();

    const envelope: {
      code: string;
      message: string;
      requestId: string;
      fieldErrors?: unknown;
    } = {
      code,
      message,
      requestId: requestIdOf(request)
    };

    if (payload.fieldErrors !== undefined) {
      envelope.fieldErrors = payload.fieldErrors;
    }

    this.adapterHost.httpAdapter.reply(http.getResponse(), envelope, status);
  }
}
