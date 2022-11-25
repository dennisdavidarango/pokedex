import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import SignInStyles from './styles'
import { ISignInProps } from './types'

const SignIn = (props: ISignInProps) => {
  const { googleButton } = props

  const lettersIcon =
    'https://1000logos.net/wp-content/uploads/2017/05/Pokemon-logo.jpg'
  const pokemonIcon =
    'data:image/png;base64,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'

  return (
    <SafeAreaView style={SignInStyles.constainerArea}>
      <View style={SignInStyles.container}>
        <View style={SignInStyles.containerPokemonImage}>
          <Image
            source={{
              height: 100,
              width: 200,
              uri: lettersIcon,
            }}
          />
        </View>

        <View>
          <Text style={SignInStyles.signInText}>Sign In</Text>
          {googleButton}
        </View>
        <View style={SignInStyles.footer}>
          <Image
            source={{
              height: 40,
              width: 40,
              uri: pokemonIcon,
            }}
          />
          <Text style={SignInStyles.footerText}>
            Created by Dennis David Arango
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default SignIn
