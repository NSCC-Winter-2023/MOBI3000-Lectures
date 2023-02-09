import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {NameContext} from "./NameProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
function HelloScreen() {
  const {name, setName} = useContext(NameContext);
  const handleChangeText = (text) => {
    setName(text);
  }
  const handleSavePress = () => {
    const json = JSON.stringify(name);
    AsyncStorage.setItem('username', json).then();
    alert("SAVING..");
  }
  const handleLoadPress = () => {
    AsyncStorage.getItem('username').then((value) => {
      const username = JSON.parse(value);
      setName(username);
    })
  }

  useEffect(() => {
    AsyncStorage.getItem('username').then((value) => {
      const username = JSON.parse(value);
      setName(username);
    })
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text>Enter your name:</Text>
        <TextInput style={styles.name} value={name} onChangeText={handleChangeText} />
      </View>
      <View>
        <Text>{"Hello, " + name}</Text>
        <Button title="SAVE" onPress={handleSavePress} />
        <Button title="LOAD" onPress={handleLoadPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      margin: 25,
      padding: 10,
    },
    name: {
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      backgroundColor: "white",
      padding: 5,
    }
  }
)

export default HelloScreen;