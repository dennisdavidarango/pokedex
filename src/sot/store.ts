import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'
import regions from './Regions/saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  
  
  export const persistor = persistStore(store)

  sagaMiddleware.run(regions.getDataRegions)
  sagaMiddleware.run(regions.getDataMainGenerations)
  sagaMiddleware.run(regions.getDataPokemonByRegion)