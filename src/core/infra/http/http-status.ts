import { ServerError } from "./errors/server-error";
import { HttpResponse } from "./http-response";

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: new ServerError()
})