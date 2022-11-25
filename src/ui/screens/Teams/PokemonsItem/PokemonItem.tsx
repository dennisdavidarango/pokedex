import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { PokemonItemProps } from './types'

const PokemonItem = ({ pokemon, selected, onPress }: PokemonItemProps) => {
  return (
    <View style={styles({}).container}>
      <TouchableOpacity style={styles({}).interestView} onPress={onPress}>
        <View style={styles({ selected }).textGroup}>
          <Text style={styles({}).text}>{pokemon.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export { PokemonItem }
