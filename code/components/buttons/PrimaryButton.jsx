import CustomLoading from "@/code/components/CustomLoading";
import { getFontFamily } from "@/code/global/fonts";
import responsive from "@/code/helpers/responsive";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PrimaryButton({
  title,
  textStyle,
  buttonStyle,
  loading = false,
  hasShadow = false,
  hasShadow2 = false,
  disabled = false,
  arrowRight = false,
  onPress = () => {},
}) {
  const shadowStyle2 = hasShadow2
    ? Platform.select({
        ios: {
          shadowColor: "#E4BAFF",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
        },
        default: {
          boxShadow: "0px 3px 2px 0px #E4BAFF40",
        },
      })
    : {};

  const gradientColors = disabled
    ? ["#d9d9d9", "#d9d9d9"]
    : ["#A084E8", "#6C4AB6"];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[styles.container, hasShadow && styles.shadow, buttonStyle]}
    >
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        {loading ? (
          <View style={styles.loaderContainer}>
            <CustomLoading color="white" size={24} />
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {arrowRight && (
              <View style={styles.icon}>
                <Feather name="arrow-right" size={20} color={"white"} />
              </View>
            )}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: responsive.width(120),
    width: "80%",
    maxWidth: "80%",
    height: responsive.height(54),
    borderRadius: 16,
  },
  gradient: {
    flex: 1,
    borderRadius: 16,
    paddingHorizontal: responsive.padding(16),
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: responsive.fontSize(18),
    fontFamily: getFontFamily("inter", 600),
    color: "white",
    textAlign: "center",
  },
  icon: {
    marginLeft: responsive.margin(6),
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#411c59",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
      },
      default: {
        elevation: 6, // Android shadow
      },
    }),
  },
});
