import { IPokemonDetails } from "../../ui/screens/Teams/TeamsDetails/types"
import { GET_POKEMON_DETAIL, GET_POKEMON_DETAIL_SUCCESS, MAIN_GENERATIONS_GET, MAIN_GENERATIONS_GET_SUCCESSFULL, POKEMONS_BY_REGION_GET, POKEMONS_BY_REGION_GET_SUCCESSFULL, REGIONS_GET, REGIONS_GET_SUCCESSFULL, RESET_STATE } from "./actionTypes"
import { IAllMainGenerations, IMainGenerations, IPokemonSpecies, IRegionsResult } from "./types"

export interface IGetRegions {
    type: typeof REGIONS_GET
  }

  export interface IGetRegionsSuccessfull {
    type: typeof REGIONS_GET_SUCCESSFULL
    regions: IRegionsResult[]
  }

  export interface IGetMainGenerations {
    type: typeof MAIN_GENERATIONS_GET,
    region: string
  }

  export interface IGetMainGenerationsSuccessfull {
    type: typeof MAIN_GENERATIONS_GET_SUCCESSFULL
    mainGenerations: IAllMainGenerations
  }


  export interface IGetPokemonByRegion {
    type: typeof POKEMONS_BY_REGION_GET,
    id: number
  }

  export interface IGetPokemonByRegionSuccessfull {
    type: typeof POKEMONS_BY_REGION_GET_SUCCESSFULL
    pokemonSpecies: IPokemonSpecies[]
  }

  export interface IResetState {
    type: typeof RESET_STATE,
  }

  export interface IGetPokemonDetail {
    type: typeof GET_POKEMON_DETAIL,
    pokemon: string,
  }
export interface IGetPokemonDetailSuccess {
    type: typeof GET_POKEMON_DETAIL_SUCCESS,
    pokemonDetail: IPokemonDetails,
  }



  export function getRegions(): RegionsActionTypes {
    return {
      type: REGIONS_GET,
    }
  }

  export function getMainGeneration(region: string): RegionsActionTypes {
    return {
      type: MAIN_GENERATIONS_GET,
      region
    }
  }

  export function getPokemonsByRegion(id: number): RegionsActionTypes {
    return {
      type: POKEMONS_BY_REGION_GET,
      id
    }
  }

  export function resetState(): RegionsActionTypes {
    return {
      type: RESET_STATE,
    }
  }

  export function getPokemonDetail(pokemon: string): RegionsActionTypes {
    return {
      type: GET_POKEMON_DETAIL,
      pokemon,
    }
  }
  

  


  
  
  export type RegionsActionTypes = 
    IGetRegions | 
    IGetRegionsSuccessfull | 
    IGetMainGenerations | 
    IGetMainGenerationsSuccessfull |
    IGetPokemonByRegion | IGetPokemonByRegionSuccessfull | IResetState | IGetPokemonDetail | IGetPokemonDetailSuccess