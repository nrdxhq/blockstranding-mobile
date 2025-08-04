# Block Stranding Mobile App

A React + Ionic + Capacitor mobile application that provides seamless access to **Block Stranding**, an online multiplayer RPG built on the **Solana blockchain** using the **MagicBlock** technology. Developed as part of the **Solana Mobile Hackathon**.

## 🎮 About Block Stranding

Block Stranding is a cutting-edge online gaming experience that leverages:

- **Solana Blockchain**: Fast, low-cost transactions and decentralized gaming infrastructure
- **MagicBlock**: Advanced blockchain gaming framework for seamless Web3 integration
- **Cross-Platform**: Accessible via mobile app and web browser
- **Real-time Gaming**: High-performance multiplayer gaming experience

## 🚀 Features

- **Native Mobile Experience**: Built with Ionic and Capacitor for iOS & Android
- **Full-Screen Gaming**: Immersive gameplay without navigation bars or toolbars
- **Secure Access**: Direct integration with Block Stranding's secure gaming platform
- **Fast Loading**: Optimized for quick game startup and smooth performance
- **Cross-Platform**: Single codebase for web, iOS, and Android

## 🛠️ Technology Stack

- **Frontend**: React with TypeScript
- **Mobile Framework**: Ionic React
- **Native Bridge**: Capacitor
- **Blockchain**: Solana
- **Gaming Framework**: MagicBlock
- **Build Tools**: Capacitor CLI, Android Studio

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Android Studio** (for Android builds)
- **Xcode** (for iOS builds - macOS only)

## 🏃‍♂️ Quick Start

### 1. Clone and Install

```bash
git clone nrdxhq/blockstranding-mobile.git
cd my-solana-app-bs
npm install
```

### 2. Run Development Server

```bash
npm start
```

The app will open at `http://localhost:3000` and automatically redirect to Block Stranding.

### 3. Mobile Development

```bash
# Build the web assets
npm run build

# Sync with mobile platforms
npx cap sync

# Open in Android Studio
npx cap open android

# Open in Xcode (macOS only)
npx cap open ios
```

## 📱 Building Android APK

### Method 1: Android Studio (Recommended)

1. **Open Android Project**:
   ```bash
   npx cap open android
   ```

2. **In Android Studio**:
   - Wait for Gradle sync to complete
   - Go to `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - Wait for build completion

3. **Find Your APK**:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Method 2: Command Line

```bash
# Navigate to android directory
cd android

# Build debug APK
./gradlew assembleDebug

# Build release APK (requires signing)
./gradlew assembleRelease
```

**Note**: Ensure you have Java Development Kit (JDK) installed for command line builds.

## 🔧 Build Configuration

### Android Requirements

- **Minimum SDK**: API Level 26 (Android 8.0)
- **Target SDK**: API Level 35
- **Required Permissions**: Internet access for game connectivity

### iOS Requirements

- **Deployment Target**: iOS 13.0+
- **Xcode**: Version 12.0 or higher

## 📁 Project Structure

```
my-solana-app-bs/
├── src/
│   ├── App.tsx              # Main app component with Block Stranding integration
│   ├── App.css              # Full-screen styling
│   └── index.tsx            # App entry point
├── android/                 # Android native project
├── ios/                     # iOS native project
├── public/                  # Static assets
├── capacitor.config.ts      # Capacitor configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎯 App Behavior

### Web Browser
- Automatically redirects to `https://blockstranding.com`
- Full-window gaming experience

### Mobile App (iOS/Android)
- Opens Block Stranding in optimized WebView
- No navigation toolbar
- No address bar
- Full-screen immersive gaming

*The provided APK is not a final product, nor a fully native Android build, but rather a prototype intended to demonstrate the gameplay vibe, possibilities, and user experience of the game on a mobile device.*

## 🔐 Security Features

- **CORS Handling**: Proper cross-origin resource sharing configuration
- **Secure Connections**: HTTPS-only communication with Block Stranding
- **WebView Security**: Optimized security settings for mobile gaming

## 🎮 Gaming Features

- **Seamless Integration**: Direct access to Block Stranding gaming platform
- **Blockchain Gaming**: Full Solana and MagicBlock functionality
- **Real-time Performance**: Optimized for responsive gaming experience
- **Cross-Platform Compatibility**: Consistent experience across devices

## 📚 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npx cap sync` - Sync web assets with mobile platforms
- `npx cap open android` - Open Android project
- `npx cap open ios` - Open iOS project

## 🌐 Links

- **Block Stranding Game**: [https://blockstranding.com](https://blockstranding.com)
- **Solana**: [https://solana.com](https://solana.com)
- **MagicBlock**: [https://magicblock.gg](https://magicblock.gg)
- **Capacitor**: [https://capacitorjs.com](https://capacitorjs.com)
- **Ionic React**: [https://ionicframework.com/react](https://ionicframework.com/react)

## 📄 License

This project is licensed under the MIT License.
