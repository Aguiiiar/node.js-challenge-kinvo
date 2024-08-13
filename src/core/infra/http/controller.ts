import { HttpRequest } from "./http-request";
import { HttpResponse } from "./http-response";

export interface Controller<T = any> {
  handle(request: HttpRequest<T>): Promise<HttpResponse>
}