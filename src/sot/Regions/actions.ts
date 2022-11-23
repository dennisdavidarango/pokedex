import { MAIN_GENERATIONS_GET, MAIN_GENERATIONS_GET_SUCCESSFULL, POKEMONS_BY_REGION_GET, POKEMONS_BY_REGION_GET_SUCCESSFULL, REGIONS_GET, REGIONS_GET_SUCCESSFULL } from "./actionTypes"
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

  


  
  
  export type RegionsActionTypes = 
    IGetRegions | 
    IGetRegionsSuccessfull | 
    IGetMainGenerations | 
    IGetMainGenerationsSuccessfull |
    IGetPokemonByRegion | IGetPokemonByRegionSuccessfull