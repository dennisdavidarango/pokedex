import { RegionsState } from "./Regions/types";
import { TeamsState } from "./Teams/types";

export interface IAppState {
    regions: RegionsState
    teams: TeamsState
  }
  