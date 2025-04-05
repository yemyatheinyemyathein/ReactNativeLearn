import { StyleSheet, Text, View, Dimensions } from 'react-native'

const DynamciUserinterface = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    </View>
  )
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
        backgroundColor: "lightblue",
        alignItems: 'center',
        justifyContent:"center"
    },
    text:{
        fontSize: windowWidth > 500 ? 50 : 24
    }
})

export default DynamciUserinterface