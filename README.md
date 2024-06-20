Hello and welcome to

## TourHawaii project

-   Made using [`React native CLI`](https://github.com/react-native-community/cli).
-   Based on [Figma](https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment) design
-   Author [Ash](https://www.linkedin.com/in/ashuto-sh/)
-   Expected features:
    -   **Any 2 of these 3**:
        -   Landing Page
        -   Surfing Page
        -   Components from `Highlights`
-   ### Implementations delivered:
    -   #### Pixel perfect re-render of **all 3 pages**
        -   Landing Page
            -   Includes `HighLights` Reel
            -   Includes categories list
            -   Includes `Tour Guide` section
        -   Bottom Tab navigation
        -   Surfing Page
            -   Includes Top Spots list
            -   Includes `Tour Guide` section
        -   `Highlights` Reel portion
            -   Includes Surfing
            -   Includes Hula
            -   Includes Volcanoes
    -   App is fully modular, and can be easily integrated with API integrations in the future

# APK Testing

I am currently building only debug APKs for demo
Please note that while the APK should be a universal APK for all Android phones,
Older and incompatible devices will not be able to run this APK

> \*\*If the APK I attach on email doesn't install on your device,

-   It means that your device may not support Universal APKs
-   Please contact me ASAP, and I will give you an APK specifically for your phone

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
