import { Router } from "express";
import { expressAdapter } from "../../../../../../shared/infra/http/adapters/express-adapter";
import { createExpenseFactory } from "../factories/create-expense-factory";

const expenseRouter = Router()

expenseRouter.post("/", expressAdapter(createExpenseFactory()))

export { expenseRouter }