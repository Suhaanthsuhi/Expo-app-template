import PrimaryButton from "@/code/components/buttons/PrimaryButton";
import CustomLoading from "@/code/components/CustomLoading";
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
        <PrimaryButton
          title="Continue"
          arrowRight={true}
          arrowLeft={true}
          onPress={() => alert("Button Pressed!")}
        />
        <CustomLoading style={{ marginTop: 10 }} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    paddingVertical: responsive.padding(8),
    color: "#333",
    fontFamily: getFontFamily("inter", 400),
  },
});
