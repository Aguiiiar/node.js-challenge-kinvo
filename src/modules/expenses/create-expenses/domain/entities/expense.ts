import { Entity } from "../../../../../core/domain/entities/entity"


export type ExpenseProps = {
  title: string
  typeExpense: string
  value: number
}

export class Expense extends Entity<ExpenseProps> {
  constructor(props: ExpenseProps, id?: string) {
    super(props, id)
  }

  static create(props: ExpenseProps, id?: string) {
    const expense = new Expense(props, id)

    return expense
  }
}