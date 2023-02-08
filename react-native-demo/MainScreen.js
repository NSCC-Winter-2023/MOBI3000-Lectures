import {Button, StyleSheet, Text, View} from "react-native";
import StarButton from "./StarButton";
import {FontAwesome} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";

function MainScreen({navigation}) {
  const [text, setText] = useState("Hello World!");
  const handlePress = () => {
    navigation.navigate('goodbye');
  };
  const handleStarButtonPress = () => {
    setText("VIEW PRESSED!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>{text}</Text>
      <Button title="PRESS ME!" onPress={handlePress} />
      <StarButton onPress={handleStarButtonPress}>
        <FontAwesome name="star" color="white" size={64} />
      </StarButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 36,
    color: 'red',
    fontWeight: 'bold'
  }
});
export default MainScreen;