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
} from "react-native";
import Lesson01 from "./Lesson01";
import StatusBarLesson from "./StatusBarLesson";
import ActivityIndicatorLesson from "./ActivityIndicatorLesson";
import AlertLesson from "./AlertLesson";
import Greet from "@/components/Greet";

const App = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <StatusBarLesson/>
      <Lesson01 />
      <ActivityIndicatorLesson/>
      <AlertLesson/>
      
      <Greet name="Ye Myat Hein"/>
      <Greet name="Hein Ye Myat"/>
    </View>
  );
};

export default App;
