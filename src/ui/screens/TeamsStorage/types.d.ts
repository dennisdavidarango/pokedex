import { IPokemonSpecies } from '../../../sot/Regions/types'

export interface ITeamsStorageProps {
  navigation: any
}
export interface IAllTeamsData {
  id: string
  pokemons: string[]
  teamName: string
}

export interface IData {
  teamName: string
  pokemons: IPokemonSpecies[]
}
