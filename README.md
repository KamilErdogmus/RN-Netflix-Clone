# Netflix Clone App in React Native-CLI

## Description

## Libraries and Tools

## Preview

<!-- <img src="assets/WeatherAppGIF.gif" height="500" /> -->

## API

[TheMovieDB-API](https://developer.themoviedb.org/docs/getting-started/)

## Installation

To run the project locally follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/KamilErdogmus/RN-Netflix-Clone.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

#### Using npm

```bash
npm install
```

#### Using yarn

```bash
yarn install
```

If you're using MacOS, navigate to the ios folder and install CocoaPods dependencies:

```bash
cd ios
```

```bash
 pod install
```

```bash
 cd ..
```

## Step 1: Start the Metro Server

First, you'll need to start **Metro**, the JavaScript _bundler_ that comes with React Native.

To start Metro, run the following command from the _root_ of your React Native project:

#### Using npm

```bash
npx expo start
```

#### Using Yarn

```bash
yarn expo start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

##### using npm

```bash
npx expo run android
```

#### Using Yarn

```bash

yarn android
```

### For iOS

##### using npm

```bash
npx expo run ios
```

#### Using Yarn

```bash
yarn ios
```

### For Web

##### using npm

```bash
npx expo run web
```

#### Using Yarn

```bash
yarn web
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
