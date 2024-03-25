import { View, Text, TextInput } from 'react-native';
import { FormInputStyles } from './formInputStyles';




export default function FormInput({ style, label, keyboardType, maxLength, onchangeText, placeholder, multiLine, autoCapitalize, value }) {

    let inputStyle = [FormInputStyles.textInput];

    if(multiLine){
        inputStyle.push(FormInputStyles.inputMiltiLine);
    }

    return (
        <View style={[FormInputStyles.container, style]}>
            <Text style={FormInputStyles.label}>{label}</Text>
            <TextInput
                style={inputStyle}
                keyboardType={keyboardType}
                maxLength={maxLength}
                onChangeText={onchangeText}
                placeholder={placeholder}
                multiline={multiLine}
                autoCapitalize={autoCapitalize}
                value={value}


            />

        </View>

    )
}