import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,	
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    font: "bold",
    fontSize: 34,
  },
});
