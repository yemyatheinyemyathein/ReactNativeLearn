import React from "react";
import { Alert, Button, View } from "react-native";

const AlertLesson = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "DOB Invalid")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB Invalid", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK Passed"),
            },
          ])
        }
      />
    </View>
  );
};

export default AlertLesson
