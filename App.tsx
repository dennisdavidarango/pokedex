import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Location from './src/ui/screens/Locations/Locations'
import Segues from './src/res/constants/segues'
import { Teams } from './src/ui/screens/Teams'
import { Provider } from 'react-redux'
import { rootStore } from './src/sot'
import { TeamsStorage } from './src/ui/screens/TeamsStorage'
import 'expo-dev-client'
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { SignIn } from './src/ui/screens/SignIn'
import { TeamsDetails } from './src/ui/screens/Teams/TeamsDetails'

const Stack = createNativeStackNavigator()

function App() {
  const { LOCATIONS, TEAMS, TEAMS_STORE, TEAMS_DETAILS } = Segues.Main

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  GoogleSignin.configure({
    webClientId:
      '345746541420-06nhgkv5baags1sqvhoh34jio4sc10g9.apps.googleusercontent.com',
  })

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn()

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential)
    user_sign_in
      .then(user => {
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (initializing) return null

  const withoutHeader = {
    headerShown: false,
  }

  const navigationContainer = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={LOCATIONS}
          component={Location}
          options={{ ...withoutHeader }}
        />
        <Stack.Screen
          name={TEAMS}
          component={Teams}
          options={{ ...withoutHeader }}
        />
        <Stack.Screen
          name={TEAMS_STORE}
          component={TeamsStorage}
          options={{ ...withoutHeader }}
        />

        <Stack.Screen
          name={TEAMS_DETAILS}
          component={TeamsDetails}
          options={{ ...withoutHeader }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

  if (!user) {
    return (
      <SignIn
        googleButton={
          <GoogleSigninButton
            onPress={onGoogleButtonPress}
            style={{
              width: 300,
              height: 75,
            }}
          />
        }
      />
    )
  }

  return <Provider store={rootStore}>{navigationContainer}</Provider>
}

export default App
