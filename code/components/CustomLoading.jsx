// components/CustomLoading.js
import theme from "@/code/global/theme";
import React from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const CustomLoading = ({ color, size = 32, style }) => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={[style]}>
      <Animated.View
        style={[
          {
            width: size,
            height: size,
            borderWidth: size * 0.1,
            borderColor: color || theme.colors.primary,
            borderTopColor: "gray",
            borderLeftColor: "gray",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRadius: size / 2,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};

export default CustomLoading;
