import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  function pressHandler() {
    console.log("pressed");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
});

export default PrimaryButton;
