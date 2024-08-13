import { Expense, ExpenseProps } from "../../entities/expense"


describe("Expense entity tests", () => {
  it("should create entity with UUID id", () => {
    const props: ExpenseProps = {
      title: "Fatura nubank",
      typeExpense: "BANK",
      value: 3500
    }
    const entity = Expense.create(props)

    expect(entity).toBeDefined()
    expect(entity.id).toBeTruthy()
  })

  it("shoutld create entity without UUID id", () => {
    const props: ExpenseProps = {
      title: "Fatura nubank",
      typeExpense: "BANK",
      value: 3500
    }
    const id = "1123"
    const entity = Expense.create(props, id)

    expect(entity).toBeDefined()
    expect(entity.id).toBeTruthy()
    expect(entity.id).toBe(id)
  })
})