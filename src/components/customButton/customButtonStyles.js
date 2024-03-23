import { StyleSheet } from "react-native";
import { AppColors } from "../colors/colors";


export const CustomButtonStyles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
        backgroundColor: AppColors.skin,
        borderRadius: 10


    },
    pressable: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: AppColors.pruple
        
    },
    textView: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: AppColors.pruple

    },
    textViewFlat: {
        backgroundColor: 'transparent'

    },
    text: {
        textAlign: 'center',
        color: AppColors.white

    },
    textFlat: {
       // color: AppColors.pruple

    }
})