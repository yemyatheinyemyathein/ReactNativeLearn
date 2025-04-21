import { useNavigation } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigation, route} : any) => {
//   const navigation = useNavigation() 
const {name} = route.params

  return (
    <View style={styles.container}>
        <Text style={styles.text}>About Screen {name}</Text>
        <Button title='Go To About' onPress={() => navigation.navigate("Home")}/>
        <Button title='Update the name' onPress={() => navigation.setParams({
            name: "Ye Myat Hein"
        })}/>
        <Button title='Go Back With Data' onPress={() => navigation.navigate("Home", {result: "This is Back with data"})}/>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text : {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})