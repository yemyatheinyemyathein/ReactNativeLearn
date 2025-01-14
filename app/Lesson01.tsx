import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
  Modal
} from "react-native";
import Logo from "../assets/images/icon.png";

const Lesson01 = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => setModelOpen(true)}
          color={"midnightblue"}
        />

        <Modal
          visible={modelOpen}
          onRequestClose={() => setModelOpen(false)}
          animationType="slide"
          presentationStyle="pageSheet" // formSheet / fullScreen / pageSheet  only work for ios not for android
        >
          <View style={{flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
            <Button
              title="Close"
              onPress={() => setModelOpen(false)}
              color={"midnightblue"}
            />
          </View>
        </Modal>
        {/* <Image source={Logo} /> */}
        <ImageBackground source={Logo} style={{ width: 300, height: 300, flex: 1 }}>
          <Text>
            <Text style={{ color: "#fff" }}>Hello</Text> World
          </Text>
        </ImageBackground>
        <Pressable onPress={() => console.log("Pressed From Text")}>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            aspernatur, facere, a enim est itaque quidem laborum ipsa blanditiis
            in nostrum tenetur animi molestias accusantium delectus ipsam
            provident reprehenderit corrupti?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Odio aspernatur, facere, a enim est
            itaque quidem laborum ipsa blanditiis in nostrum tenetur animi
            molestias accusantium delectus ipsam provident reprehenderit
            corrupti?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Odio aspernatur, facere, a enim est itaque quidem laborum ipsa
            blanditiis in nostrum tenetur animi molestias accusantium delectus
            ipsam provident reprehenderit corrupti?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Odio aspernatur, facere, a enim est
            itaque quidem laborum ipsa blanditiis in nostrum tenetur animi
            molestias accusantium delectus ipsam provident reprehenderit
            corrupti?
          </Text>
        </Pressable>

        <Pressable onPress={() => console.log("Pressed From Image")}>
          <Image source={Logo} style={{ width: 300, height: 300, flex: 1 }} />
        </Pressable>
      </ScrollView>
      
    </View>
  );
};

export default Lesson01;



