import { View, Text } from 'react-native';
import FormInput from './formInput/formInput';
import { ExpenseFormStyles } from './expenseFormStyles';
import { useState } from 'react';
import CustomButton from '../customButton/customButton';



export default function ExpenseForm({onCancel, onSubmit, submitButtonLabel}) {

    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: '',
    });


    function inputValueHandler(inputIdentifier, enteredValue) {

        setInputValues((currentInputValues) => {

            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler(){
        const expenseData = {
            amount: inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }
        onSubmit(expenseData);

    }

    return (
        <View style={ExpenseFormStyles.constainer}>
            <View style={ExpenseFormStyles.titleView}>
                <Text style={ExpenseFormStyles.title}>Your Expense</Text>
            </View>

            <View style={ExpenseFormStyles.amountDateView}>
                <FormInput
                    style={{ flex: 1 }}
                    label='Amount'
                    keyboardType='numeric'
                    value={inputValues.amount}
                    onchangeText={inputValueHandler.bind(this, 'amount')}


                />
                <FormInput
                    style={{ flex: 1 }}
                    label='Date'
                    placeholder='YYYY-MM-DD'
                    maxLength={10}
                    value={inputValues.date}
                    onchangeText={inputValueHandler.bind(this, 'date')}
                />

            </View>

            <FormInput
                label='Description'
                multiLine={true}
                value={inputValues.description}
                onchangeText={inputValueHandler.bind(this, 'description')}
            />

            <View style={ExpenseFormStyles.customButtonView}>
                <CustomButton onPress={onCancel} propStyle={ExpenseFormStyles.propView} mode='flat' >Cancel</CustomButton>
                <CustomButton onPress={submitHandler} propStyle={ExpenseFormStyles.propView} >{submitButtonLabel}</CustomButton>
            </View>

        </View>

    )
}