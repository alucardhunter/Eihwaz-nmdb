import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import React, { ReactElement } from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import persistedReducer from '../../Store/persistReducer'
import { PersistGate } from 'redux-persist/integration/react'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import { createBrowserHistory } from 'history'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

const History = createBrowserHistory()
const persistor = persistStore(store)

const wrapComponent = (Component: any, props = {}): ReactElement => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <Router history={History}>
          <Component {...props} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default wrapComponent
