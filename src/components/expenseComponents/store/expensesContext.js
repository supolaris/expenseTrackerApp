import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Miscellaneous',
        price: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'Insurance',
        price: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e3',
        description: 'Education',
        price: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e4',
        description: 'Housing',
        price: 14.99,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e5',
        description: 'Travel',
        price: 18.59,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e6',
        description: 'Shopping',
        price: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e7',
        description: 'Health',
        price: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e8',
        description: 'Entertainment',
        price: 14.99,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e9',
        description: 'Utilities',
        price: 18.59,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e10',
        description: 'Transportation',
        price: 18.59,
        date: new Date('2024-03-22'),
    },
    {
        id: 'e11',
        description: 'Dining Out',
        price: 18.59,
        date: new Date('2022-02-22'),
    },
    {
        id: 'e12',
        description: 'Groceries',
        price: 18.59,
        date: new Date('2024-03-21'),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, price, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, price, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;