import { HttpRequest } from "./http-request";
import { HttpResponse } from "./http-response";

export interface Controller<T> {
  handle(request: HttpRequest<T>): HttpResponse<T>
}