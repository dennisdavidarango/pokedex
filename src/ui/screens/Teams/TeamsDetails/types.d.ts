import { RouteProp } from "@react-navigation/native"
import { IPokemonSpecies } from "../../../../sot/Regions/types"

export interface ITeamsDetails {
  pokemonDetail: IPokemonDetails
  navigation: any
  route: RouteProp<{
      params: {
        teamName: string,
        pokemons: string[]
      }
    }>
  actions: {
    getPokemonDetail: (pokemon: string) => void
  }
}

export interface IPokemonDetails {
  abilities: [],
  base_experience: number,
  forms: [],
  game_indices: [],
  height: number,
  held_items: [],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: [],
  name: string,
  order: number,
  past_types: [],
  species: IPokemonSpecies,
  sprites: {
      front_default: string
  },
  stats: [],
  types: [],
  weight: number
}
