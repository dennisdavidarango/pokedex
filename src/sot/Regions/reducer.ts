import { RegionsActionTypes } from "./actions"
import { MAIN_GENERATIONS_GET_SUCCESSFULL, POKEMONS_BY_REGION_GET_SUCCESSFULL, REGIONS_GET_SUCCESSFULL } from "./actionTypes"
import { IAllMainGenerations, IMainGenerations, RegionsState } from "./types"



const initialState: RegionsState = {
    regions: [],
    mainGenerations: {} as IAllMainGenerations,
    pokemonByRegion: []

}

function homeReducer(state = initialState, action: RegionsActionTypes): RegionsState {
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

      default:
        return state
    }
  }
  
  export default homeReducer