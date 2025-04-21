import { useNavigation } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({ route, navigation }: any) => {
    // const navigation = useNavigation()
    const { result } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen {result}</Text>
            <Button title='Go To About'
                onPress={() => navigation.navigate("About", { name: "May Moe Thu Zar" })}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})