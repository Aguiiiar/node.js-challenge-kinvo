import { Controller } from "../../../../core/infra/http/controller";
import { MissingParamError } from "../../../../core/infra/http/errors/missing-param";
import { ServerError } from "../../../../core/infra/http/errors/server-error";
import { HttpRequest } from "../../../../core/infra/http/http-request";
import { HttpResponse } from "../../../../core/infra/http/http-response";
import { badRequest, serverError } from "../../../../core/infra/http/http-status";
import { CreateExpenseRequest, CreateExpenseUseCase } from "./create-expense";


export class CreateExpenseController implements Controller {

  constructor(
    private readonly createExpense: CreateExpenseUseCase
  ) { }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {

      const requiredFields = ["title", "typeExpense", "value"]

      for (const field of requiredFields) {
        if (!request.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const createExpense = await this.createExpense.execute(request.body as CreateExpenseRequest)

      return {
        statusCode: 201,
        body: createExpense
      }
    } catch (error) {
      console.log(error)
      return serverError(new ServerError())
    }
  }
}