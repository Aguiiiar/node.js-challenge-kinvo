import { Expense, ExpenseProps } from "../entities/expense";

export interface ExpenseRepository {
  create(props: Expense): Promise<ExpenseProps>
}