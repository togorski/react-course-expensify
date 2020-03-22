import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpensesSummary"

test("should properly render with 0 expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should properly render with 0 expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenesTotal={123}/>)
    expect(wrapper).toMatchSnapshot()
})