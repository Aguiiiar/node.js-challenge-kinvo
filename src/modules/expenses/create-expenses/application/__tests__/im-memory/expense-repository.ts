import { Expense } from "../../../domain/entities/expense";
import { ExpenseRepository } from "../../../domain/repositories/expense-repository";

export class ImMemoryExpenseRepository implements ExpenseRepository {
  public expenseDatabase: Expense[] = []

  async create(expense: Expense): Promise<Expense> {
    this.expenseDatabase.push(expense)

    return Promise.resolve(expense)
  }
}