import React from "react";
import { View, StatusBar } from "react-native";

const StatusBarLesson = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor={"lightgreen"}
        barStyle={"dark-content"}
        hidden
      />
    </View> // barStyle have option / default / light-content/ dark-content
  );
};

export default StatusBarLesson;
