import { Platform, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenWrapper({
  children,
  backgroundCol = "white",
  style = {},
}) {
  const insets = useSafeAreaInsets();

  const top = typeof insets.top === "number" ? insets.top : 0;
  const bottom = typeof insets.bottom === "number" ? insets.bottom : 0;
  const left = typeof insets.left === "number" ? insets.left : 0;
  const right = typeof insets.right === "number" ? insets.right : 0;
  return (
    <SafeAreaView
      edges={Platform.OS === "ios" ? ["top"] : ["top"]}
      style={[
        { flex: 1 },
        {
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        },
        { backgroundColor: backgroundCol },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
