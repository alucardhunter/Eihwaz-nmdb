import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { persistStore } from 'redux-persist'
import store from './Store/store'
import 'fontsource-roboto'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes/Routes'
import './Assets/MainStyle/main.css'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { CircularProgress } from '@material-ui/core'

const persistor = persistStore(store)

const History = createBrowserHistory()

const loading = (
  <div className="Loading_Holder">
    <CircularProgress />
  </div>
)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={History}>
          <React.Suspense fallback={loading}>
            <Header />
            <Routes />
            <Footer />
          </React.Suspense>
        </Router>
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  )
}

export default App
