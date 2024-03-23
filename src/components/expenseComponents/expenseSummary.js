import { Text, View, StyleSheet } from 'react-native';
import { AppColors } from '../colors/colors';

export default function ExpenseSummary({ expenses, periodName }) {

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.price
  }, 0);

  return (
    <View style={styles.container}>

      <View style={styles.nameExpenseView}>
        <Text style={styles.periodName}>{periodName}</Text>
        <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {


  },
  nameExpenseView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: AppColors.yellow,
    paddingVertical: 20,
    borderRadius: 10
    

  },
  periodName: {
    color: AppColors.navyBLue,


  },
  sum: {
    color: AppColors.navyBLue,
    fontWeight: 'bold',

  },
})


