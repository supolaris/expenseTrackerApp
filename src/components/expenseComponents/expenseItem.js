import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AppColors } from '../colors/colors';
import { FormatedDate } from '../dateComponent/dateComponent';
import { useNavigation } from '@react-navigation/native';

export default function ExpenseItem({ id, description, date, price }) {


    const navigation = useNavigation();
    function Navigation(){
        navigation.navigate('ManageExpense_Screen', {
            expenseId: id
        });
    }

    return (
        <Pressable onPress={Navigation} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <View style={styles.descriptionDateView}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.date}>{FormatedDate(date)}</Text>
                </View>
                <View style={styles.amountView}>
                    <Text style={styles.amount}>{price}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5

    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 5,
        shadowColor: AppColors.skin,
        shadowOpacity: 1,
        shadowOffset: { width: 1, height: 3},
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 0,
        marginHorizontal: 3

    },
    descriptionDateView: {

    },
    description: {
        color: AppColors.navyBLue,
        fontWeight: 'bold',


    },
    date: {

    },
    amountView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.navyBLue,
        paddingHorizontal: 10,
        borderRadius: 10,
        minWidth: 80


    },
    amount: {
        color: 'white',

    }
})