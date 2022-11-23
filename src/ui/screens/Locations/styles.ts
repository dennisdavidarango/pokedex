import { StyleSheet } from "react-native";
import Color from "../../../res/constants/colors";
import Size from "../../../res/constants/sizes";

const LocationStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.WHITE,
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
      color: Color.BACKGROUND,
      paddingStart: 20,
      fontSize: Size.HEADER,
      fontWeight: 'bold'
    },
    subHeaderText: {
      fontSize: Size.SUBHEADER,
      paddingStart: 20,
      fontWeight: '700',
      marginBottom: 30,

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
    itemText: {
      color: Color.WHITE,
      fontSize: Size.SUBHEADER,
      fontWeight: '800',
    }




  });

  export default LocationStyles