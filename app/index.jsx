import ScreenWrapper from "@/code/components/ScreenWrapper";
import { getFontFamily } from "@/code/global/fonts";
import responsive from "@/code/helpers/responsive";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, Expo Router!</Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    paddingTop: responsive.padding(0),
    color: "#333",
    fontFamily: getFontFamily("inter", 400),
  },
});
