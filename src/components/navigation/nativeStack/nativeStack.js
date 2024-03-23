import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ManageExpenseScreen from '../../../screens/manageExpense/manageExpense';
import { BottomTabs } from '../bottomTabs/bottomTabs';
import { AppColors } from '../../colors/colors';
import ExpensesContextProvider from '../../expenseComponents/store/expensesContext';
import AllExpenseScreen from '../../../screens/allExpense/allExpense';
import RecentExpenseScreen from '../../../screens/recentExpense/recentExpense';

const Stack = createNativeStackNavigator();

export default function NativeStack() {
    return ( 
        
        <ExpensesContextProvider>
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: AppColors.skin},
                headerTintColor: AppColors.white

            }}
            
            >
                <Stack.Screen
                    name="BottomTabs_Screens"
                    component={BottomTabs}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="ManageExpense_Screen"
                    component={ManageExpenseScreen}
                    options={{
                        title: 'Manage Expense',
                        presentation: 'modal'
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
        </ExpensesContextProvider>
        
    );
}