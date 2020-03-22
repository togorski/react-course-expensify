import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpensesSummary"

test("should properly render with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={456}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should properly render with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenesTotal={123}/>)
    expect(wrapper).toMatchSnapshot()
})