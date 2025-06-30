# 📱 Expo Mobile App Starter Template

This is a **basic Expo mobile application template** equipped with essential tools and configurations to help you start building your app quickly and efficiently.

---

## ✨ Features

- ✅ Custom fonts preloaded (e.g., Inter)
- ✅ Icons setup and ready to use
- ✅ Splash screen support for both iOS and Android
- ✅ Babel configured with module aliasing (`@`)
- ✅ Global screen wrapper for consistent layout
- ✅ Expo SDK 53 compatibility
- ✅ Organized folder structure

---

## Get Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npx expo start -c
   ```

## Folder Structure Details

1. **app** → Contains only the app's navigation logic.
2. **assets** → Contains images, fonts, icons, and other assets.
3. **code** → Contains code for all screens, API call logic, etc. (Complete code).
4. **code/components** → Contains reusable components that can be used throughout the app.
5. **code/global** → Contains globally used files with a single point of change (e.g., asset loading, language translations, URLs, etc.).
6. **code/helpers** → Contains helper functions that perform specific tasks to support the app's logic (e.g., weight percentage calculations, height percentage, password hashing, etc.).
7. **code/screens** → Contains code files for all screens with API calls, maintaining separation of concerns (e.g., `home`, `products`, `scanner` folders with subfolders).
8. **code/store** → Contains Zustand store-related files (or hooks) and storage-related files for user details stored in AsyncStorage, MMKV, or any other storage solution.
9. **code/todo.txt** → Used to track and resolve bugs in the app (if any).
10. **app.json** → Contains metadata about the app, serving as a configuration file (e.g., app name, slug, version, scheme, splash screen, plugins, etc.).
11. **babel.config.js** → Ensures that the React application runs smoothly across different platforms by transforming modern JavaScript (ES6+ & JSX) into a version that any platform can understand.
12. **package.json** → Lists the packages used in this application.
