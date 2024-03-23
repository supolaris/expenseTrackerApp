import { View, FlatList, Text } from 'react-native';
import ExpenseItem from './expenseItem';


function renderItem(itemData){
    // return <Text>{itemData.item.description}</Text>
    return <ExpenseItem {...itemData.item}/>
}

export default function ExpenseList({expenses}) {



    return (
        <FlatList 
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    );
}


