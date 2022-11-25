import { StyleSheet } from 'react-native'
import Color from '../../../res/constants/colors'
import Size from '../../../res/constants/sizes'

const TeamsStorageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: 20,
  },
  marginContainer: {
    marginBottom: 20,
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
  deleteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchStyles: {
    marginEnd: 10,
    backgroundColor: Color.PRIMARY_BUTTON,
    padding: 10,
    borderRadius: 10
  },
  subHeaderText: {
    fontSize: Size.SUBHEADER,
    fontWeight: '100',
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: Color.SELECT_INPUT,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    color: Color.WHITE,
    fontSize: Size.SUBHEADER,
    fontWeight: '800',
  },
  teamColor: {
    color: Color.WHITE,
  },
  numberTeamsText: {
    color: Color.WHITE,
    fontSize: 10,
  },
})

export default TeamsStorageStyles
