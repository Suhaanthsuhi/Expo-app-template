const { getDefaultConfig } = require("@expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("otf", "ttf", "lottie");

defaultConfig.resolver.unstable_enablePackageExports = true;

module.exports = wrapWithReanimatedMetroConfig(defaultConfig);
