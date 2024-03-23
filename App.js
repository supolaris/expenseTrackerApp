import { StyleSheet, Text, View } from 'react-native';
import { NativeStack } from './src/components/navigation/nativeStack/nativeStack';
import { StatusBar } from 'expo-status-bar';
import ExpensesContextProvider from './src/components/expenseComponents/store/expensesContext';
import { BottomTabs } from './src/components/navigation/bottomTabs/bottomTabs';
import ManageExpenseScreen from './src/screens/manageExpense/manageExpense';
import { AppColors } from './src/components/colors/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: AppColors.skin},
                headerTintColor: AppColors.white
            }}
          >
            <Stack.Screen
              name="BottomTabs_Screen"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense_Screen"
              component={ManageExpenseScreen}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
