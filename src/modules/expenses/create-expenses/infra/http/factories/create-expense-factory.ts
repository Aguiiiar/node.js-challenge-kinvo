import { CreateExpenseUseCase } from "../../../application/create-expense";
import { CreateExpenseController } from "../../../application/create-expense.controller";
import { ExpenseRepositoryImpl } from "../../orm/repositories/expense-repository";

export const createExpenseFactory = (): CreateExpenseController => {
  const expenseRepository = new ExpenseRepositoryImpl()
  const createExpense = new CreateExpenseUseCase(expenseRepository)

  return new CreateExpenseController(createExpense)
}