import React from "react"
import numeral from "numeral"
import { connect } from "react-redux"
import selectExpenses  from "../selectors/expenses"
import getTotalExpenses from "../selectors/expenses-total"

export const ExpensesSummary = (props) => (
    <div>
        <p>
            Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
        </p>
    </div>
)

const mapStateToProps = (state) => ({
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: getTotalExpenses(selectExpenses(state.expenses, state.filters))
})

export default connect(mapStateToProps)(ExpensesSummary)