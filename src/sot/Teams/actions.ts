import { IPokemonSpecies } from "../Regions/types"
import { CREATE_TEAM } from "./actionTypes"

export interface ICreateTeam {
    type: typeof CREATE_TEAM,
    PokemonTeam: IPokemonSpecies[],
    id: number
  }

  export function createTeam(PokemonTeam: IPokemonSpecies[], id: number): TeamsActionTypes {
    return {
      type: CREATE_TEAM,
      PokemonTeam,
      id
    }
  }
  
  export type TeamsActionTypes = 
  ICreateTeam 
