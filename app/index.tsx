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
import Logo from "../assets/images/icon.png";
import Lesson01 from "./Lesson01";

const App = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Lesson01 />
    </View>
  );
};

export default App;
