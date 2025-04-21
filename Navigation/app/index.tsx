import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        title: "Welcome Home",
        headerStyle: {
          backgroundColor: "#6a51ae",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => {
          return <Pressable onPress={() => alert('Menu Button Pressed')}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>;
        },
        contentStyle: {
          backgroundColor: "#e8e4f3"
        }
      }}>
        <Stack.Screen name='Home' component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerRight: () => {
              return <Pressable onPress={() => alert('Menu Button Pressed')}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>;
            },
            contentStyle: {
              backgroundColor: "#e8e4f3"
            }
          }}
        />
        <Stack.Screen name='About' component={AboutScreen} initialParams={{ name: "Guest" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index