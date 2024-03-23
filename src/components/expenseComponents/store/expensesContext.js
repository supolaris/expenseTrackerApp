import { createContext, useReducer } from "react";


const DummyData = [
    {
        id: 'e1',
        description: 'Household',
        price: 500.00,
        date: new Date('2024-02-20')
    },
    {
        id: 'e2',
        description: 'Garden',
        price: 312.00,
        date: new Date('2024-03-31')
    },
    {
        id: 'e3',
        description: 'Plumber',
        price: 150.00,
        date: new Date('2024-01-11')
    },
    {
        id: 'e4',
        description: 'Car',
        price: 900.00,
        date: new Date('2024-07-17')
    },
    {
        id: 'e5',
        description: 'Exectricity bill',
        price: 810.00,
        date: new Date('2024-14-24')
    },
    {
        id: 'e6',
        description: 'Laundry',
        price: 100.00,
        date: new Date('2024-02-20')
    },
    {
        id: 'e7',
        description: 'Gas bill',
        price: 700.00,
        date: new Date('2024-03-31')
    },
    {
        id: 'e8',
        description: 'Water bill',
        price: 50.00,
        date: new Date('2024-01-11')
    },
    {
        id: 'e9',
        description: 'Cleaning',
        price: 70.00,
        date: new Date('2024-07-17')
    },
    {
        id: 'e10',
        description: 'Paint',
        price: 450.00,
        date: new Date('2024-14-24')
    },
]


export const ExpensesContext = ({
    expenses: [],
    addExpense: ({ description, price, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, price, date }) => { },
})

function ExpenseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payLoad, id: id }, ...state]
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payLoad.id
            );
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = { ...updateExpense, ...action.payLoad.data};
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updatedItem;
            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense) => expense.id != action.payLoad.id);
        default:
            return state;
    }
}

 function ExpensesContextProvider({ children }) {

    const [expenseState, dispatch] = useReducer(ExpenseReducer, DummyData);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payLoad: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payLoad: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payLoad: { id: id, data: expenseData } });
    }

    const value = {
        expenses : expenseState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>

}

export default ExpensesContextProvider;