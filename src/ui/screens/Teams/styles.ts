import { StyleSheet } from "react-native";
import Color from "../../../res/constants/colors";
import Size from "../../../res/constants/sizes";

const TeamsStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.WHITE,
    },
    headerContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Color.WHITE_OPACITY,
      height: 60,
      marginBottom: 30,
      marginTop: 20,
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
    },
    headerText: {
      color: Color.BACKGROUND,
      paddingHorizontal: 20,
      fontSize: Size.HEADER,
      fontWeight: 'bold'
    },
    subHeaderText: {
      fontSize: Size.SUBHEADER,
      paddingStart: 20,
      fontWeight: '200',
      marginBottom: 30,
    },

    createTeamButtom: {
      color: Color.WHITE,
      fontSize: Size.SUBHEADER,
      fontWeight: 'bold'
    },

    itemContainer: {
      flex: 1,
      height: 60,
      backgroundColor: Color.SELECT_INPUT,
      marginBottom: 10,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10
    },
    itemContainerSelected: {
      flex: 1,
      height: 60,
      backgroundColor: Color.PRIMARY_BUTTON,
      marginBottom: 10,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10
    },
    itemText: {
      color: Color.WHITE,
      fontSize: Size.SUBHEADER,
      fontWeight: '800',
    }

  });

  export default TeamsStyles