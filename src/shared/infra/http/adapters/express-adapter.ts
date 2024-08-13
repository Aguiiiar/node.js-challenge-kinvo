import { Request, Response } from "express";
import { Controller } from "../../../../core/infra/http/controller";
import { HttpRequest } from "../../../../core/infra/http/http-request";
import { HttpResponse } from "../../../../core/infra/http/http-response";

export const expressAdapter = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const httpResponse: HttpResponse = await controller.handle(httpRequest)

    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}