import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"

const store = configureStore()
let state = {}

const unsubscribe = store.subscribe(() => {
    state = store.getState()
    console.log(state)
})

store.dispatch(addExpense({ description: "Water bill", amount: 500}))
store.dispatch(addExpense({ description: "Gas bill", amount: 300, createdAt: 1000}))
store.dispatch(addExpense({ description: "Rent", amount: 3345500}))
// store.dispatch(setTextFilter("bill"))

// console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))