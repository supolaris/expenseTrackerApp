import { Text, View, Pressable, StyleSheet } from 'react-native';
import { ManageExpenseStyles } from './manageExpenseStyles';
import { useContext, useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../../components/colors/colors';
import CustomButton from '../../components/customButton/customButton';
import { ExpensesContext } from '../../components/expenseComponents/store/expensesContext';

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

  function confirmHandler(){
    if(isEditing){
      expensesCtx.updateExpense(

      )
    }else{
      expensesCtx.addExpense();
    }

    navigation.goBack();

  }

  return <View style={styles.deleteIconMainView}>
    <View style={styles.customButtonView}>
      <CustomButton onPress={cancelHandler} propStyle={styles.propView} mode='flat' >Cancel</CustomButton>
      <CustomButton onPress={confirmHandler} propStyle={styles.propView} >{isEditing ? 'Update' : 'Add'}</CustomButton>
    </View>
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




  return (
    <View style={ManageExpenseStyles.container}>

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  deleteIconMainView: {
    flex: 1,
    padding: 20,
    backgroundColor: AppColors.lightGreen

  },
  customButtonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  propView: {
    minWidth: 50,
    marginHorizontal: 5

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

