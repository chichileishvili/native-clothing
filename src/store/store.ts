import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer'

type RootStateType = ReturnType<typeof rootReducer>

const middleWares: any[] = []
if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger)
}

const persistConfig: PersistConfig<RootStateType> = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
})

export const persistor = persistStore(store)
