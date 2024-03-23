import { Pressable, View, Text } from 'react-native';
import { CustomButtonStyles } from './customButtonStyles';

export default function CustomButton({ children, onPress, mode, propStyle }){

    return(
        <View style={propStyle}>
            <Pressable 
            style={(pressed) => pressed && CustomButtonStyles.pressed}
            onPress={onPress}
            >
                <View
                style={[CustomButtonStyles.textView, mode == 'flat' && CustomButtonStyles.textViewFlat]}
                >
                    <Text
                    style={[CustomButtonStyles.text, mode == 'flat' && CustomButtonStyles.textFlat]}
                    >{children}</Text>
                </View>
            </Pressable>

        </View>
    )
}

