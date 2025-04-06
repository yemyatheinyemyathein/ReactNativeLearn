import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const SafeAreaViewCompo = () => {

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>Welcome!</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SafeAreaViewCompo;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "plum"
    },
    container: {
        flex: 1,
        backgroundColor: "plum",
        paddingTop: 60
    },
    box: {
        padding: 20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
});
