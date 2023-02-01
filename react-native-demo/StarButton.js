import {Pressable, StyleSheet, View} from "react-native";
import {useState} from "react";
import {FontAwesome} from "@expo/vector-icons";

function StarButton({onPress, children}) {
  const [on, setOn] = useState(false);

  const handlePress = () => {
    setOn(!on);
    onPress();
  }

  const changeStar = () => {
    if (on) {
      return <FontAwesome name="star" color="white" size={64} />
    } else {
      return <FontAwesome name="star-o" color="white" size={64} />
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.button}>
        {changeStar()}
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  button: {
    height:100,
    width:100,
    backgroundColor:'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default StarButton;