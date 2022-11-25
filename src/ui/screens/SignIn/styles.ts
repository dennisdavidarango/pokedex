import { StyleSheet } from 'react-native'
import Size from '../../../res/constants/sizes'

const SignInStyles = StyleSheet.create({
  constainerArea: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'space-around',
    height: '100%',
    alignItems: 'center',
  },
  containerPokemonImage: {
    marginTop: 10,
  },
  signInText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: Size.HEADER,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontWeight: '100',
    fontSize: 10,
    marginStart: 10,
  },
})

export default SignInStyles
