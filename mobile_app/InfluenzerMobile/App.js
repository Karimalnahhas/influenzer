import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import VideoSubmissionScreen from './src/screens/VideoSubmissionScreen';

const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8b5cf6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ 
            title: 'Influenzer',
            headerLeft: null,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="VideoSubmission" 
          component={VideoSubmissionScreen}
          options={{ title: 'Submit Video' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

