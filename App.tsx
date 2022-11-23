import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from './src/ui/screens/Locations/Locations';
import Segues from './src/res/constants/segues';
import { Teams } from './src/ui/screens/Teams';
import { Provider } from 'react-redux';
import { rootStore } from './src/sot';
import { TeamsStorage } from './src/ui/screens/TeamsStorage';

const Stack = createNativeStackNavigator();

export default function App() {
  const {LOCATIONS, TEAMS, TEAMS_STORE} = Segues.Main 

  const withoutHeader = {
    headerShown: false,
  }

  const navigationContainer = (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name={LOCATIONS} 
        component={Location} 
        options={{...withoutHeader}} 
      />
      <Stack.Screen 
        name={TEAMS} 
        component={Teams} 
        options={{...withoutHeader}} 
      />
      <Stack.Screen 
        name={TEAMS_STORE} 
        component={TeamsStorage} 
        options={{...withoutHeader}} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  )

  return (
   <Provider store={rootStore} >
      {navigationContainer}
   </Provider>
  )
}
