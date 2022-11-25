import { GestureResponderEvent } from 'react-native'
import { IPokemonSpecies } from '../../../../sot/Regions/types'

export interface PokemonItemProps {
  pokemon: IPokemonSpecies
  selected: boolean
  onPress: (event: GestureResponderEvent) => void
}
