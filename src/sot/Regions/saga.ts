import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import { IPokemonDetails } from '../../ui/screens/Teams/TeamsDetails/types'
import { fetchWithOptions } from '../fetchOptions'
import { IAppState } from '../IAppState'
import {
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  MAIN_GENERATIONS_GET,
  MAIN_GENERATIONS_GET_SUCCESSFULL,
  POKEMONS_BY_REGION_GET,
  POKEMONS_BY_REGION_GET_SUCCESSFULL,
  REGIONS_GET,
  REGIONS_GET_SUCCESSFULL,
} from './actionTypes'
import { IAllMainGenerations, IGetAllGeneration, IRegions } from './types'

export function* getRegions() {
  try {
    const URL = 'https://pokeapi.co/api/v2/region'

    const response: { json: () => void; status: number } = yield call(
      fetchWithOptions,
      {
        method: 'GET',
        headers: {},
        body: '',
      },
      URL,
    )

    const data: IRegions = yield call([response, 'json'])

    if (response.status === 200) {
      yield put({ type: REGIONS_GET_SUCCESSFULL, regions: data.results })
    }
  } catch (e) {
    console.log(e)
  }
}

export function* getMainGenerations(payload: any) {
  try {
    const URL = `https://pokeapi.co/api/v2/region/${payload.region}`

    const response: { json: () => void; status: number } = yield call(
      fetchWithOptions,
      {
        method: 'GET',
        headers: {},
        body: '',
      },
      URL,
    )

    const data: IAllMainGenerations = yield call([response, 'json'])

    if (response.status === 200) {
      yield put({
        type: MAIN_GENERATIONS_GET_SUCCESSFULL,
        mainGenerations: data,
      })
    }
  } catch (e) {
    console.log(e)
  }
}

export function* getPokemonByRegion(payload: any) {
  try {
    const URL = `https://pokeapi.co/api/v2/generation/${payload.id}`

    const response: { json: () => void; status: number } = yield call(
      fetchWithOptions,
      {
        method: 'GET',
        headers: {},
        body: '',
      },
      URL,
    )

    const data: IGetAllGeneration = yield call([response, 'json'])

    if (response.status === 200) {
      yield put({
        type: POKEMONS_BY_REGION_GET_SUCCESSFULL,
        pokemonSpecies: data.pokemon_species,
      })
    }
  } catch (e) {
    console.log(e)
  }
}

export function* getPokemonDetail(payload: any) {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${payload.pokemon}`

    const response: { json: () => void; status: number } = yield call(
      fetchWithOptions,
      {
        method: 'GET',
        headers: {},
        body: '',
      },
      URL,
    )

    const data: IPokemonDetails = yield call([response, 'json'])

    yield put({ type: GET_POKEMON_DETAIL_SUCCESS, pokemonDetail: data })
  } catch (e) {
    console.log(e)
  }
}

function* getDataRegions() {
  yield all([takeEvery(REGIONS_GET, getRegions)])
}

function* getDataPokemonDetails() {
  yield all([takeEvery(GET_POKEMON_DETAIL, getPokemonDetail)])
}
function* getDataMainGenerations() {
  yield all([takeEvery(MAIN_GENERATIONS_GET, getMainGenerations)])
}

function* getDataPokemonByRegion() {
  yield all([takeEvery(POKEMONS_BY_REGION_GET, getPokemonByRegion)])
}

export default {
  getDataRegions,
  getDataMainGenerations,
  getDataPokemonByRegion,
  getDataPokemonDetails,
}
