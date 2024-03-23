import { Text, View } from 'react-native';
import { AllExpenseStyles } from './allExpenseStyles';
import ExpenseOutput from '../../components/expenseComponents/expenseOutput';
import { ExpensesContext } from '../../components/expenseComponents/store/expensesContext';
import { useContext } from 'react';

export default function AllExpenseScreen() {

  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpenseOutput expenses={expensesCtx.expenses} periodName='All Expenses' />

  );
}

