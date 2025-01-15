import React from 'react'
import { Text, View } from 'react-native'

interface GreetProps {
    name: string
}

const Greet = ({name}: GreetProps) => {
  return (
    <View style={{backgroundColor: "plum"}}>
        <Text>Hello , {name}</Text>
    </View>
  )
}

export default Greet