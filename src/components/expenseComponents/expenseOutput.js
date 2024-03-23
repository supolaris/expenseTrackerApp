import { View, StyleSheet } from 'react-native';
import ExpenseList from './expenseList';
import ExpenseSummary from './expenseSummary';
import { AppColors } from '../colors/colors';

export default function ExpenseOutput({ expenses, periodName }) {


    return (
        <View style={styles.constainer}>
            
                <ExpenseSummary expenses={expenses} periodName={periodName} />
                <ExpenseList expenses={expenses} />
            



        </View>

    );
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: AppColors.lightGreen,
        paddingTop: 20,
        paddingHorizontal: 10


    },

})


