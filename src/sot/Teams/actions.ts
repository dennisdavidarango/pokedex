import { IPokemonDetails } from "../../ui/screens/Teams/TeamsDetails/types"
import { IPokemonSpecies } from "../Regions/types"
import { CREATE_TEAM } from "./actionTypes"

export interface ICreateTeam {
    type: typeof CREATE_TEAM,
    PokemonTeam: IPokemonSpecies[],
  }


  export function createTeam(PokemonTeam: IPokemonSpecies[]): TeamsActionTypes {
    return {
      type: CREATE_TEAM,
      PokemonTeam,
    }
  }
 
  export type TeamsActionTypes = 
  ICreateTeam 

