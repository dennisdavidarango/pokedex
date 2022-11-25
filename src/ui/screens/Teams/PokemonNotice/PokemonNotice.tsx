import React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import Toast from 'react-native-root-toast'
import { PokemonNoticeStyles } from './styles'
import { PokemonNoticeProps } from './types'

const PokemonNotice = ({
  message,
  isVisible,
  setModalVisible,
}: PokemonNoticeProps) => {
  return (
    <Toast
      visible={isVisible}
      onHide={() => setModalVisible(false)}
      containerStyle={PokemonNoticeStyles.noticeView}
    >
      <View style={PokemonNoticeStyles.container}>
        <Text style={PokemonNoticeStyles.noticeText}>{message}</Text>
      </View>
    </Toast>
  )
}

export default PokemonNotice
