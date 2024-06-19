Hello and welcome to

## TourHawaii project

-   Made using [`React native CLI`](https://github.com/react-native-community/cli).
-   Based on [Figma](https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment) design
-   Author [Ash](https://www.linkedin.com/in/ashuto-sh/)
-   Project has additionally licensed fonts
    -   My `.APK` fill will look like a pixel-perfect re-render of the Figma design
    -   But without the additional font, local builds will not

# Installation and building

## Step 1: Environment

```bash
# Install everything
yarn install
```

> **Note**: Certain fonts used in this project are private and were purchased personally. The personal license doesn't allow checking in those fonts on a `VCS` like `GitHub`. Local builds of the App should hence include those font assets before running the command below, for the full UI experience

## Step 2: Assets

```bash
# Link assets
npx react-native-asset
```

# Running on device/emulator

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
