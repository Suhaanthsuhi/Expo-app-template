export const fonts = {
  "Inter-Black": require("@/assets/fonts/inter/Inter-Black.otf"),
  "Inter-BlackItalic": require("@/assets/fonts/inter/Inter-BlackItalic.otf"),
  "Inter-Bold": require("@/assets/fonts/inter/Inter-Bold.otf"),
  "Inter-BoldItalic": require("@/assets/fonts/inter/Inter-BoldItalic.otf"),
  "Inter-ExtraBold": require("@/assets/fonts/inter/Inter-ExtraBold.otf"),
  "Inter-ExtraBoldItalic": require("@/assets/fonts/inter/Inter-ExtraBoldItalic.otf"),
  "Inter-ExtraLight-BETA": require("@/assets/fonts/inter/Inter-ExtraLight-BETA.otf"),
  "Inter-ExtraLightItalic-BETA": require("@/assets/fonts/inter/Inter-ExtraLightItalic-BETA.otf"),
  "Inter-Italic": require("@/assets/fonts/inter/Inter-Italic.otf"),
  "Inter-Light-BETA": require("@/assets/fonts/inter/Inter-Light-BETA.otf"),
  "Inter-LightItalic-BETA": require("@/assets/fonts/inter/Inter-LightItalic-BETA.otf"),
  "Inter-Medium": require("@/assets/fonts/inter/Inter-Medium.otf"),
  "Inter-MediumItalic": require("@/assets/fonts/inter/Inter-MediumItalic.otf"),
  "Inter-Regular": require("@/assets/fonts/inter/Inter-Regular.otf"),
  "Inter-SemiBold": require("@/assets/fonts/inter/Inter-SemiBold.otf"),
  "Inter-SemiBoldItalic": require("@/assets/fonts/inter/Inter-SemiBoldItalic.otf"),
  "Inter-Thin-BETA": require("@/assets/fonts/inter/Inter-Thin-BETA.otf"),
  "Inter-ThinItalic-BETA": require("@/assets/fonts/inter/Inter-ThinItalic-BETA.otf"),
};

const interFontWeightMap = {
  100: "Inter-Thin-BETA",
  200: "Inter-ExtraLight-BETA",
  300: "Inter-Light-BETA",
  400: "Inter-Regular",
  500: "Inter-Medium",
  600: "Inter-SemiBold",
  700: "Inter-Bold",
  800: "Inter-ExtraBold",
  900: "Inter-Black",
};

const interItalicSuffixMap = {
  "Inter-Thin-BETA": "Inter-ThinItalic-BETA",
  "Inter-Light-BETA": "Inter-LightItalic-BETA",
  "Inter-ExtraLight-BETA": "Inter-ExtraLightItalic-BETA",
  "Inter-Regular": "Inter-Italic",
  "Inter-Medium": "Inter-MediumItalic",
  "Inter-SemiBold": "Inter-SemiBoldItalic",
  "Inter-Bold": "Inter-BoldItalic",
  "Inter-ExtraBold": "Inter-ExtraBoldItalic",
  "Inter-Black": "Inter-BlackItalic",
};

export function getFontFamily(
  family = "inter",
  weight = 400,
  isItalic = false
) {
  const baseFontFamily = family === "inter" ? interFontWeightMap[weight] : null;
  return isItalic
    ? family === "inter"
      ? interItalicSuffixMap[baseFontFamily]
      : null
    : baseFontFamily;
}
