import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Logo from "../assets/images/icon.png";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => console.log("Pressed From My Virtual Device")}
          color={"midnightblue"}
        />
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

export default App;
