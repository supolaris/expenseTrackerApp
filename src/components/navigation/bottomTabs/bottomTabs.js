import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenseScreen from '../../../screens/recentExpense/recentExpense';
import AllExpenseScreen from '../../../screens/allExpense/allExpense';
import { AppColors } from '../../colors/colors';
import { Ionicons } from '@expo/vector-icons';
import { CustomIcon } from '../../customIcon/customIcon';


const Tab = createBottomTabNavigator();

export function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: AppColors.skin,
                },
                headerTintColor: AppColors.white,
                tabBarStyle: {
                    backgroundColor: AppColors.skin,
                },
                tabBarActiveTintColor: AppColors.white,
                headerRight: ({ tintColor }) => (
                    <CustomIcon
                        iconName='add-circle-outline'
                        iconSize={24} iconColor={tintColor}
                        onPress={() => { navigation.navigate('ManageExpense_Screen') }}
                    />),
            })}
        >
            <Tab.Screen
                name="RecentExpense_Screen"
                component={RecentExpenseScreen}
                options={{
                    title: 'Recent Expense',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ((iconColor, iconSize) =>
                        <Ionicons
                            name='calendar-outline'
                            size={iconSize}
                            color={iconColor}
                        />)

                }}
            />

            <Tab.Screen
                name="AllExpense_Screen"
                component={AllExpenseScreen}
                options={{
                    title: 'All Expense',
                    tabBarLabel: 'All',
                    tabBarIcon: ((iconColor, iconSize) =>
                        <Ionicons name='hourglass'
                            size={iconSize}
                            color={iconColor}
                        />)

                }}
            />
        </Tab.Navigator>
    );
}