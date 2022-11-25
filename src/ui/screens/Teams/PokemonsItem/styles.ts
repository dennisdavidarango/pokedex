import { StyleSheet } from 'react-native'
import Color from '../../../../res/constants/colors'
import Size from '../../../../res/constants/sizes'

interface IStylesProps {
  selected?: boolean
  interestColor?: string
}

const styles = ({ selected, interestColor }: IStylesProps) =>
  StyleSheet.create({
    container: {
      paddingBottom: 2,
    },
    interestView: {
      width: '100%',
      backgroundColor: Color.GREY_DARK,
      borderRadius: 16,
      marginBottom: 8,
      height: 70,
    },
    textGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 15,
      borderRadius: 16,
      backgroundColor: selected ? interestColor : Color.PRIMARY_BUTTON,
    },
    text: {
      fontWeight: '600',
      fontSize: Size.SUBHEADER,
      color: Color.WHITE,
      paddingLeft: 12,
      lineHeight: 20.25,
    },
  })

export { styles }
