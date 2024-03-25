import { Text, View, Pressable, StyleSheet } from 'react-native';
import { ManageExpenseStyles } from './manageExpenseStyles';
import { useContext, useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../../components/colors/colors';
import CustomButton from '../../components/customButton/customButton';
import { ExpensesContext } from '../../components/expenseComponents/store/expensesContext';
import ExpenseForm from '../../components/expenseForm/expenseForm';

export default function ManageExpenseScreen({ route, navigation }) {

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;


  //method 1
  // navigation.setOptions({
  //   title: isEditing ? 'Edit Expense' : 'Add Expense'
  // });

  //method 2 by using useLayoutEffect
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });

  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);

    navigation.goBack();

  }

  function cancelHandler(){


    navigation.goBack();

  }

  function confirmHandler(expenseData){
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId, expenseData)
    }else{
      expensesCtx.addExpense(expenseData);
    }

    navigation.goBack();

  }

  return <View style={styles.deleteIconMainView}>
    <ExpenseForm 
    submitButtonLabel={isEditing ? 'Update' : 'Add'} 
    onCancel={cancelHandler}
    onSubmit={confirmHandler}
    />

    {isEditing && (

      <View style={styles.deleteIconView}>
        <Ionicons
          name='trash'
          color={AppColors.pruple}
          size={35}
          onPress={deleteExpenseHandler}
        />
      </View>
    )
    }

  </View>
}



const styles = StyleSheet.create({
  deleteIconMainView: {
    flex: 1,
    padding: 20,
    backgroundColor: AppColors.lightGreen

  },
  deleteIconView: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 20,
    elevation: 12,
    shadowColor: AppColors.pruple,
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 3 },

  }
})

