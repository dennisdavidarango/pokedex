import { IPokemonDetails } from "../../ui/screens/Teams/TeamsDetails/types"

export interface RegionsState {
    regions: IRegionsResult[]
    mainGenerations: IAllMainGenerations
    pokemonByRegion: IPokemonSpecies[],
    pokemonDetail: IPokemonDetails
}

export interface IRegions {
    count: number,
    next: string | null,
    previous: string | null,
    results: IRegionsResult[]

}

export interface IRegionsResult {
    name: string,
    url: string
}

export interface IMainGenerations {
    name: string,
    url: string
}

export interface IMainGenerationNames  {
    language: IMainGenerations
    name: string
 }

export interface IAllMainGenerations {
    id: number,
    locations: IMainGenerations[],
    main_generation:{
       name: string,
       url: string
    },
    name: string,
    names: IMainGenerationNames[]
    pokedexes: IMainGenerations[]
    version_groups:IMainGenerations[]
 }

 export interface IPokemonSpecies {
    name: string,
    url: string
 }


 export interface IGetAllGeneration {
    abilities: [],
    id: number,
    main_region: IMainGenerations,
    moves: IMainGenerations[],
    name: string,
    names: IMainGenerationNames[],
    pokemon_species: IPokemonSpecies[],
    types: IMainGenerationNames[],
    version_groups: IMainGenerationNames[]
 }
