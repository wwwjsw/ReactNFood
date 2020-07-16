import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RecommendedScreen from './src/Screens/RecommendedScreen';
import OverviewScreen from './src/Screens/Overview';
import ScheduleScreen from './src/Screens/ScheduleScreen';

const RootStack = createStackNavigator();

function App() {
  const headerOptions = {
    title: 'title =D',
    headerStyle: {
      backgroundColor: '#f74540',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f74540" />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            options={{...headerOptions, ...{title: 'Select Screen'}}}
            component={HomeScreen}
          />
          <RootStack.Screen
            name="Login"
            options={{...headerOptions, ...{title: 'Login'}}}
            component={LoginScreen}
          />
          <RootStack.Screen
            name="Overview"
            options={{...headerOptions, ...{title: 'Overview'}}}
            component={OverviewScreen}
          />
          <RootStack.Screen
            name="Recommended"
            options={{...headerOptions, ...{title: 'Recommended'}}}
            component={RecommendedScreen}
          />
          <RootStack.Screen
            name="Schedule"
            options={headerOptions}
            component={ScheduleScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
