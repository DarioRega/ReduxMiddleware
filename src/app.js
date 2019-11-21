import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { firebase } from './firebase/firebase'
import AppRouter, { history } from './router/AppRouter'
import configureStore from './store/configureStore'
import { startSetUserData } from './actions/userData'
import { login, logout } from './actions/auth'

const store = configureStore()

const provideToComps = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(provideToComps, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetUserData()).then(() => {
      renderApp()
      if (history.location.pathname === '/login') {
        history.push('/welcome')
      } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
      }
    })
  }
})
