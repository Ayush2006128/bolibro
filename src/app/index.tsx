import { View, StyleSheet } from "react-native";
import { Host, Text } from "@expo/ui/jetpack-compose";

export default function Index() {
  return (
    <View style={styles.container}>
      <Host matchContents>
      <Text>Hello, World!</Text>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,	
    alignItems: "center",
    justifyContent: "center",
  },
});
