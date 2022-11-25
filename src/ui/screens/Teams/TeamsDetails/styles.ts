import { StyleSheet } from 'react-native'
import Color from '../../../../res/constants/colors'
import Size from '../../../../res/constants/sizes'

const TeamsdetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: 20,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  modalContainer: {
    height: '50%',
    width: '95%',
    borderRadius: 16,
    backgroundColor: Color.BACKGROUND,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  headerContainer: {
    backgroundColor: Color.WHITE_OPACITY,
    height: 60,
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  headerText: {
    fontSize: Size.HEADER,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: Size.SUBHEADER,
    fontWeight: '100',
    textAlign: 'center',
  },
  textItem: {
    color: Color.WHITE,
  },
  itemText: {
    color: Color.WHITE,
    fontSize: Size.SUBHEADER,
    fontWeight: '800',
  },
  textDetails: {
    color: Color.PRIMARY_BUTTON,
  },
  closeContainerButton: {
    backgroundColor: Color.GREY_DARK,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  containerTitle: {
    marginBottom: 20,
  },
  pokemonItemContainer: {
    backgroundColor: Color.SELECT_INPUT,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default TeamsdetailsStyles
