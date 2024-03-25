import { StyleSheet } from "react-native";
import { AppColors } from "../../colors/colors";


export const FormInputStyles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        

    },
    label: {
        fontSize: 12,
        color: AppColors.pruple,
        marginBottom: 5

    },
    textInput: {
        fontSize: 18,
        borderRadius: 10,
        padding: 10,
        color: AppColors.white,
        backgroundColor: AppColors.lightGreen,
        borderWidth: 1

    },
    inputMiltiLine: {
        minHeight: 100,
        textAlignVertical: 'top',
        
    }

})