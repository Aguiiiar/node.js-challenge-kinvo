import { Expense } from "../../domain/entities/expense";
import { ExpenseRepository } from "../../domain/repositories/expense-repository";
import { CreateExpenseUseCase } from "../create-expense";
import { ImMemoryExpenseRepository } from "./im-memory/expense-repository";

let expenseRepository: ExpenseRepository;
let createExpense: CreateExpenseUseCase;
describe("CreateExpenseUseCase tests", () => {

  beforeAll(() => {
    expenseRepository = new ImMemoryExpenseRepository()
    createExpense = new CreateExpenseUseCase(expenseRepository)
  })

  it("should create expense", async () => {
    const expense = await createExpense.execute({
      title: "Fatura nubank",
      typeExpense: "BANK",
      value: 3500
    })

    const repository = await expenseRepository.create(expense)

    expect(repository).toBeInstanceOf(Expense)
    expect(repository).toBeTruthy()
  })
})