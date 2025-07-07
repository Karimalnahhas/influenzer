# Influenzer Mobile App

This is the React Native mobile application for the Influenzer platform - a gamified micro-influencer platform targeting college students.

## Features

- **Social Login**: Login with Instagram, TikTok, Twitter/X, YouTube, or email
- **Competition Dashboard**: Browse active competitions with detailed information
- **Video Submission**: Upload and submit videos for competitions
- **Social Sharing**: Share submissions to social media platforms
- **User Stats**: Track earnings, wins, views, and rank

## Screens

1. **Login Screen**: Social and email authentication
2. **Dashboard Screen**: Competition browsing and user statistics
3. **Video Submission Screen**: Video upload and submission form

## Setup Instructions

### Prerequisites

- Node.js (>= 16)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Navigate to the mobile app directory:
   ```bash
   cd influenzer/mobile_app/InfluenzerMobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS, install CocoaPods dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

### Development

- Start the Metro bundler:
  ```bash
  npm start
  ```

## Dependencies

- React Native 0.72.6
- React Navigation 6.x
- React Native Vector Icons
- React Native Image Picker
- React Native Video
- React Native Gesture Handler
- React Native Reanimated

## Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── LoginScreen.js
│   ├── DashboardScreen.js
│   └── VideoSubmissionScreen.js
└── assets/             # Images, fonts, etc.
```

## Notes

- This is a basic UI implementation for demonstration purposes
- Social login integration requires proper API setup
- Video upload functionality needs backend integration
- Push notifications require Firebase/OneSignal setup
- Real device testing recommended for camera/video features

