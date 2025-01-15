import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const ActivityIndicatorLesson = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false}
      />
      <Text>{/* this will not show cuz is false  */}</Text>
    </View>
  );
};

export default ActivityIndicatorLesson;
