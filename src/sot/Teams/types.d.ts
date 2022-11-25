import { IPokemonDetails } from '../../ui/screens/Teams/TeamsDetails/types'
import { IPokemonSpecies } from '../Regions/types'

export interface TeamsState {
  pokemonTeams: IPokemonSpecies[]
}

export interface IPokemonTeams {
  teams: IPokemonSpecies[]
}
