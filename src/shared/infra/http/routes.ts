import { Router } from "express";
import { expenseRouter } from "../../../modules/expenses/create-expenses/infra/http/routes/expense.routes";

const router = Router()

router.use('/expenses', expenseRouter)

export { router }