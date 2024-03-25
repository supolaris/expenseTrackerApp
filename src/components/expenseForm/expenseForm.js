import { View, Text } from 'react-native';
import FormInput from './formInput/formInput';
import { ExpenseFormStyles } from './expenseFormStyles';
import { useState } from 'react';



export default function ExpenseForm() {

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

        </View>

    )
}