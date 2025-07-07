# Influenzer - Gamified Micro-Influencer Platform

A comprehensive web and mobile application designed to attract and engage micro-influencers, with a primary target audience of college students. The platform revolves around time-based video creation competitions where brands sponsor competitions and users create promotional videos to win prizes.

## Project Overview

Influenzer is a gamified platform that connects brands with micro-influencers through video creation competitions. Users can:

- Participate in brand-sponsored video competitions
- Win cash prizes, free products, and exclusive brand deals
- Share their submissions across social media platforms
- Track their earnings and competition performance
- Build their influencer profile and audience

## Technology Stack

### Frontend (Web)
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Animations**: Framer Motion

### Mobile App
- **Framework**: React Native
- **Navigation**: React Navigation
- **Icons**: React Native Vector Icons
- **Media**: React Native Image Picker, React Native Video

### Backend (Planned)
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB or PostgreSQL
- **Authentication**: Auth0 or Firebase Authentication
- **Cloud Services**: AWS/Google Cloud
- **Video Storage**: AWS S3 + AWS Elemental MediaConvert

## Project Structure

```
influenzer/
├── frontend/
│   └── influenzer-web/          # React web application
│       ├── src/
│       │   ├── components/      # UI components
│       │   │   ├── Login.jsx
│       │   │   ├── Dashboard.jsx
│       │   │   └── VideoSubmission.jsx
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── public/
│       └── package.json
├── mobile_app/
│   └── InfluenzerMobile/        # React Native mobile app
│       ├── src/
│       │   ├── screens/         # Screen components
│       │   │   ├── LoginScreen.js
│       │   │   ├── DashboardScreen.js
│       │   │   └── VideoSubmissionScreen.js
│       │   └── components/      # Reusable components
│       ├── android/
│       ├── ios/
│       └── package.json
├── backend/                     # Backend API (to be implemented)
└── README.md
```

## Core Features Implemented

### 1. User Authentication
- Social login options (Instagram, TikTok, Twitter/X, YouTube)
- Traditional email/password authentication
- Responsive login interface for both web and mobile

### 2. Competition Dashboard
- Browse active competitions with detailed information
- Real-time competition statistics (participants, time remaining)
- Competition categories and requirements
- Current leaderboard display
- User statistics tracking (earnings, wins, views, rank)

### 3. Video Submission System
- Video upload functionality
- Competition requirement validation
- Video metadata input (title, description, hashtags)
- Social media sharing integration
- Upload progress tracking

### 4. User Profile & Stats
- Earnings tracking and wallet display
- Competition history and performance metrics
- Social media account linking
- Achievement and ranking system

## Key Screens

### Web Application
1. **Login Screen**: Clean, modern interface with social and email login options
2. **Dashboard**: Card-based layout showing competitions, user stats, and search functionality
3. **Video Submission**: Comprehensive form for video upload and submission details

### Mobile Application
1. **Login Screen**: Mobile-optimized with gradient background and social login buttons
2. **Dashboard Screen**: Native mobile interface with scrollable competition cards
3. **Video Submission Screen**: Mobile-friendly video upload with camera integration

## Getting Started

### Web Application
```bash
cd frontend/influenzer-web
pnpm install
pnpm run dev
```

### Mobile Application
```bash
cd mobile_app/InfluenzerMobile
npm install
npm run android  # or npm run ios
```

## Design Guidelines

- **UI**: Clean, modern, and visually engaging design
- **Theme**: Dark/light mode support with purple-pink gradient branding
- **UX**: Mobile-first approach with intuitive user journey
- **Gamification**: Progress bars, badges, animated celebrations
- **Responsive**: Optimized for both desktop and mobile devices

## Next Steps for Development

1. **Backend Implementation**
   - Set up Node.js/Express API server
   - Implement user authentication system
   - Create competition management system
   - Set up video storage and processing

2. **Database Design**
   - User profiles and authentication
   - Competition data and rules
   - Video submissions and metadata
   - Engagement metrics and analytics

3. **Social Media Integration**
   - OAuth implementation for social platforms
   - API integration for sharing functionality
   - Tracking and analytics for shared content

4. **Payment System**
   - Prize distribution mechanism
   - User wallet and payout system
   - Transaction history and reporting

5. **Admin Panel**
   - Brand/sponsor portal for competition creation
   - Analytics dashboard for campaign performance
   - User and content moderation tools

## Features for Future Enhancement

- Push notifications for competition updates
- Advanced video editing tools
- Live streaming capabilities
- Influencer collaboration features
- Brand partnership marketplace
- Advanced analytics and insights
- Community features and social interactions

## Notes

This initial implementation provides a solid foundation with basic UI components and user flows. The codebase is structured to be easily extensible for additional features and backend integration.

The design follows modern web and mobile development best practices with responsive layouts, accessible components, and clean code architecture.

