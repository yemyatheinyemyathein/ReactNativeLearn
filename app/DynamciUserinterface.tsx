import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'

const DynamciUserinterface = () => {

    // to be responsive in rotating.
//   const [dimensions, setDimensions] = useState({
//     window: Dimensions.get("window")
//   })

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({window}) => {
//         setDimensions({window})
//     })
//     return () => subscription?.remove();
//   })

//   const { window } = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

  // not getting responsive automatically 
  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;

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

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    </View>
  )
}

export default DynamciUserinterface;