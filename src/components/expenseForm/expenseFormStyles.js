import { StyleSheet } from "react-native";
import { AppColors } from "../colors/colors";


export const ExpenseFormStyles = StyleSheet.create({
    constainer: {
        marginTop: 50

    },
    titleView: {

    },
    title: {
        color: AppColors.pruple,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20

    },
    amountDateView: {
        flexDirection: 'row'

    }
    
})