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
    <View style={{ flex: 1 }}>
      <ScrollView>

      <StatusBarLesson/>
      <Lesson01 />
      <ActivityIndicatorLesson/>
      <AlertLesson/>
      
      <Greet name="Ye Myat Hein"/>
      <Greet name="Hein Ye Myat"/>
      <StyleSheetStyling/>
      <View style={styles.container}>
        <Box style={{backgroundColor: "#8e9b00"}}>Box 1</Box>
        <Box style={{backgroundColor: "#b65d1f"}}>Box 2</Box>
        <Box style={{backgroundColor: "#1c4c56"}}>Box 3</Box>
        <Box style={{backgroundColor: "#ab9156"}}>Box 4</Box>
        <Box style={{backgroundColor: "#6b0803"}}>Box 5</Box>
        <Box style={{backgroundColor: "#1c4c56"}}>Box 6</Box>
        <Box style={{backgroundColor: "#b95f21"}}>Box 7</Box>
      </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  }
})