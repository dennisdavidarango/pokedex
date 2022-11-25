import { IPokemonSpecies } from "../../../sot/Regions/types"
import { IPokemonTeams } from "../../../sot/Teams/types"

export interface ITeamsProps {
    navigation: any
    id: number,
    pokemons: IPokemonSpecies[]
    actions:{
      resetState: () => void
      getPokemonsByRegion: (id: number) => void
      createTeam: (PokemonTeam: IPokemonSpecies[]) => void
    }
  }

 
 
 
 
  