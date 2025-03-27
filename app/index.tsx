import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
  Modal,
  StyleSheet,
} from "react-native";
import Lesson01 from "./Lesson01";
import StatusBarLesson from "./StatusBarLesson";
import ActivityIndicatorLesson from "./ActivityIndicatorLesson";
import AlertLesson from "./AlertLesson";
import Greet from "@/components/Greet";
import StyleSheetStyling from "./StyleSheetStyling";
import Box from "./Box";

const App = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    // <View style={{ flex: 1 }}>
    //   <ScrollView>

      //   {/* <StatusBarLesson/>
      // <Lesson01 />
      // <ActivityIndicatorLesson/>
      // <AlertLesson/>
      
      // <Greet name="Ye Myat Hein"/>
      // <Greet name="Hein Ye Myat"/>
      // <StyleSheetStyling/> */}
        // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
        <View style={styles.container}>
          <Box style={{ backgroundColor: "#8e9b00", flex : 1, alignSelf: "flex-start" }}>Box 1</Box>
          <Box style={{ backgroundColor: "#b65d1f", flex : 1, alignSelf: "flex-end" }}>Box 2</Box>
          <Box style={{ backgroundColor: "#1c4c56", flex : 3, alignSelf: "center" }}>Box 3</Box>
          <Box style={{ backgroundColor: "#ab9156", flex : 1, alignSelf: 'auto' }}>Box 4</Box>
          {/* <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
          <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
          <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}
          {/* adsadsfadsfasdfadsfadsfadsfawawgasefawwfasdgadsv */}
        </View>
    //   </ScrollView>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: 300,
    flexWrap: "wrap-reverse", // wrap, wrap-reverse
    flex: 1,
    // flexDirection: "row-reverse", // column , column-reverse, row, row-reverse
    // justifyContent: "flex-end", // flex-start, flex-end, center, space-between, space-evenly
    alignItems: "flex-end", // stretch, flex-start, flex-end, center, baseLine,
    marginTop: 120,
    borderWidth: 6,
    borderColor: "red",
  }
})