import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StyleSheetStyling = () => {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>
                    Style Inheritence <Text style={styles.boldText}>In Bold</Text>
                </Text>
            </View>
            <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
                <Text style={styles.lightBlueBg}>
                    LIGHT BLUE
                </Text>
            </View>
            <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
                <Text style={styles.lightGreenBg}>
                    LIGHT BLUE
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
    },
    darkMode :{
        backgroundColor: "black",
        color: 'white',
    },
    darkModeText : {
        color: "white",
    },
    boldText : {
        fontWeight: 'bold'
    },
    box: {
        width: "25%", // this method can also acceptable
        height: 100,
        // padding: 10,
        paddingHorizontal: 19,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor:"purple",
        borderRadius: 5,
    },
    lightBlueBg: {
        backgroundColor: "lightblue"
    },
    lightGreenBg: {
        backgroundColor: "lightgreen"
    },
    boxShadow: {
        shadowColor: "#333333",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: { // will only work for android cuz shadowColor is not working in android.
        elevation: 10,
    }
})

export default StyleSheetStyling