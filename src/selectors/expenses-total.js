export default (expenses) => {
    return expenses.reduce((sum, currentExpense) => {
        return sum + currentExpense.amount
    }, 0)
}