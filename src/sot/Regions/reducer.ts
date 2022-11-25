import { IPokemonDetails } from '../../ui/screens/Teams/TeamsDetails/types'
import { RegionsActionTypes } from './actions'
import {
  GET_POKEMON_DETAIL_SUCCESS,
  MAIN_GENERATIONS_GET_SUCCESSFULL,
  POKEMONS_BY_REGION_GET_SUCCESSFULL,
  REGIONS_GET_SUCCESSFULL,
  RESET_STATE,
} from './actionTypes'
import { IAllMainGenerations, RegionsState } from './types'

const initialState: RegionsState = {
  regions: [],
  mainGenerations: {} as IAllMainGenerations,
  pokemonByRegion: [],
  pokemonDetail: {} as IPokemonDetails,
}

function homeReducer(
  state = initialState,
  action: RegionsActionTypes,
): RegionsState {
  switch (action.type) {
    case REGIONS_GET_SUCCESSFULL: {
      const newState = { ...state }
      newState.regions = action.regions
      return newState
    }
    case MAIN_GENERATIONS_GET_SUCCESSFULL: {
      const newState = { ...state }
      newState.mainGenerations = action.mainGenerations
      return newState
    }

    case POKEMONS_BY_REGION_GET_SUCCESSFULL: {
      const newState = { ...state }
      newState.pokemonByRegion = action.pokemonSpecies
      return newState
    }
    case RESET_STATE: {
      const newState = { ...state }
      newState.pokemonByRegion = []
      return newState
    }
    case GET_POKEMON_DETAIL_SUCCESS: {
      const newState = { ...state }
      newState.pokemonDetail = action.pokemonDetail
      return newState
    }

    default:
      return state
  }
}

export default homeReducer
