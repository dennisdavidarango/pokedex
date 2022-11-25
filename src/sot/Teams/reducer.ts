import { IPokemonDetails } from "../../ui/screens/Teams/TeamsDetails/types"
import { TeamsActionTypes } from "./actions"
import { CREATE_TEAM } from "./actionTypes"
import { TeamsState } from "./types"

const initialState: TeamsState = {
    pokemonTeams: [],
}

function TeamsReducer(state = initialState, action: TeamsActionTypes): TeamsState {
    switch (action.type) {
      case CREATE_TEAM: {
        const newState = { ...state }
        newState.pokemonTeams = action.PokemonTeam
        return newState
      }
   

      default:
        return state
    }
  }
  
  export default TeamsReducer