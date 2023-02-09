import {Button, StyleSheet, Text, View} from "react-native";
import StarButton from "./StarButton";
import {FontAwesome} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import {useContext, useState} from "react";
import {NameContext} from "./NameProvider";

function MainScreen({navigation}) {
  const {name, setName} = useContext(NameContext);
  const handlePress = () => {
    navigation.navigate('goodbye');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>{name}</Text>
      <Button title="PRESS ME!" onPress={handlePress} />
      <StarButton>
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