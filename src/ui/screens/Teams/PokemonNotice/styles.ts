import { StyleSheet } from 'react-native'
import Color from '../../../../res/constants/colors'

const PokemonNoticeStyles = StyleSheet.create({
  centeredViewModal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  noticeView: {
    alignItems: 'center',
    backgroundColor: Color.DISABLED_POPUP,
    width: '90%',
    borderRadius: 12,
    shadowColor: '#000',
    paddingLeft: 18,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 10,
  },
  noticeText: {
    textAlign: 'center',
    lineHeight: 16.9,
    fontWeight: '500',
    fontSize: 20,
    color: Color.WHITE,
  },
})

export { PokemonNoticeStyles }
