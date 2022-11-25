import { IRegionsResult } from '../../../sot/Regions/types'

export interface ILocationsProps {
  navigation: any
  regions: IRegionsResult[]
  actions: {
    getRegions: () => void
    getMainGeneration: (region: string) => void
  }
}
