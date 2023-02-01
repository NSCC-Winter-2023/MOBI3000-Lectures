import { StatusBar } from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import StarButton from "./StarButton";
import {FontAwesome} from "@expo/vector-icons";

export default function App() {
  const [text, setText] = useState("Hello World!");
  const handlePress = () => {
    setText("BUTTON PRESSED!");
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
