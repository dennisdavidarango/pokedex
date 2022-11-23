import { Dispatch, SetStateAction } from 'react'
import { ViewStyle } from 'react-native'

export interface PokemonNoticeProps {
  message: string
  isVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
  containerStyle?: ViewStyle
}
