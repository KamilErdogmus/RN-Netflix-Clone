# Netflix Clone App in React Native-CLI

## Description

This Netflix clone application is built using React Native-CLI, offering a comprehensive streaming platform experience. The app features user authentication, profile management, and content categorization. Users can browse through movies and TV shows, search for specific titles, and view detailed information about each content. The interface includes smooth animations, a responsive design, and implements Redux for efficient state management. Key features include a custom video player, watchlist functionality, and personalized recommendations. The app demonstrates modern mobile development practices with TypeScript integration, proper error handling, and follows React Native best practices for optimal performance.

## Libraries and Tools

- **@react-native-async-storage/async-storage**: Persistent key-value storage system for React Native apps to store data locally on device
- **@react-navigation/bottom-tabs**: Customizable bottom tab navigation bar component with smooth transitions and badges
- **@react-navigation/native**: Essential navigation infrastructure and utilities for building React Native navigation flows
- **@react-navigation/native-stack**: Stack navigator providing native animations and gestures for screen transitions
- **@reduxjs/toolkit**: Official Redux package with utilities to simplify common Redux use cases
- **axios**: Promise-based HTTP client for browser and Node.js with request/response interceptors
- **formik**: Complete solution for building and managing forms with validation and error handling
- **iconsax-react-native**: Modern icon library with multiple variants and styles for React Native
- **millify**: Converts long numbers into human-readable strings with appropriate suffixes
- **react-native-image-viewing**: Lightweight and performant image viewer with pinch-to-zoom and swipe gestures
- **react-native-progress**: Collection of progress indicators including circles, bars and spinners
- **react-native-safe-area-context**: Handles safe area insets for notched devices and dynamic interfaces
- **react-native-screens**: Native navigation container components for optimal performance
- **react-native-svg**: Full-featured SVG library for React Native with support for animations
- **react-native-swiper-flatlist**: Horizontal swipeable flatlist component with pagination and autoplay
- **react-redux**: Official React bindings for Redux state management integration
- **toastify-react-native**: Highly customizable toast notification system for React Native
- **yup**: Schema builder for runtime value parsing and validation with TypeScript support

## Preview

<img src="src/assets/Netflix-GIF.gif" height="800" />

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
