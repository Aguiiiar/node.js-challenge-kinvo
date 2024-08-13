import { MissingParamError } from "../../../../core/infra/http/errors/missing-param";
import { badRequest } from "../../../../core/infra/http/http-status";
import { Expense } from "../domain/entities/expense";
import { ExpenseRepository } from "../domain/repositories/expense-repository";

export type CreateExpenseRequest = {
  title: string
  typeExpense: string
  value: number
}


export class CreateExpenseUseCase {
  constructor(
    private readonly expenseRepository: ExpenseRepository
  ) { }

  async execute(props: CreateExpenseRequest) {
    const expense = Expense.create(props)

    await this.expenseRepository.create(expense)

    console.log(expense.id)
    return this.toJson(expense)
  }

  private toJson({ id, props }: Expense) {
    return {
      id,
      title: props.title,
      typeExpense: props.typeExpense,
      value: props.value
    }
  }
}