import { combineReducers } from "@reduxjs/toolkit";
import { RegionsReducer } from "./Regions";
import { TeamsReducer } from "./Teams";

const appReducer = combineReducers({
   regions: RegionsReducer,
   teams: TeamsReducer
  })

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
  }
  
  export default rootReducer