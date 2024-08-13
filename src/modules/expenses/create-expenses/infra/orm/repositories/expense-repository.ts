import { prisma } from "../../../../../../shared/infra/prisma";
import { Expense, ExpenseProps } from "../../../domain/entities/expense";
import { ExpenseRepository } from "../../../domain/repositories/expense-repository";

export class ExpenseRepositoryImpl implements ExpenseRepository {
  async create({ id, props }: Expense): Promise<ExpenseProps> {
    return await prisma.expense.create({
      data: {
        id,
        title: props.title,
        typeExpense: props.typeExpense,
        value: props.value
      }
    })
  }
}