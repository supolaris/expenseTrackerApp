import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function CustomIcon({ iconName, iconSize, iconColor, onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                />
            </View>

        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 10

    }
})