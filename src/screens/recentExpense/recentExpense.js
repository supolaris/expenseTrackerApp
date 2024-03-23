import { Text, View } from 'react-native';
import { RecentExpenseStyles } from './recentExpenseStyles';
import ExpenseOutput from '../../components/expenseComponents/expenseOutput';
import { ExpensesContext } from '../../components/expenseComponents/store/expensesContext';
import { useContext } from 'react';
import { getDateMiusDays } from '../../components/dateComponent/dateComponent';

export default function RecentExpenseScreen() {
 
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMiusDays(today, 7);

    return expense.date > date7DaysAgo;
  })

  return (
    <ExpenseOutput expenses={recentExpenses} periodName = 'Recent Expenses'/>

  );
}

