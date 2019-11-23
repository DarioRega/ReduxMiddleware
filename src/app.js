import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { firebase } from './firebase/firebase'
import AppRouter, { history } from './router/AppRouter'
import configureStore from './store/configureStore'
import { startSetUserData } from './actions/userData'
import { login, logout, startLogout } from './actions/auth'

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

// ReactDOM.render(<p>Loading....</p>, document.getElementById('app'))
ReactDOM.render(provideToComps, document.getElementById('app'))

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('logged')
//     store.dispatch(login(user.uid))
//     store.dispatch(startSetUserData()).then(() => {
//       renderApp()
//       if (history.location.pathname === '/login') {
//         history.push('/welcome')
//       } else {
//         store.dispatch(logout())
//         console.log('logged out')
//         renderApp()
//         history.push('/')
//       }
//     })
//   }
// })
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('logged')
//     store.dispatch(login(user.uid))
//     // store.dispatch(startSetUserData())
//       renderApp()
//       if (history.location.pathname === '/login') {
//         history.push('/welcome')
//       } else {
//         store.dispatch(logout())
//         console.log('logged out')
//         renderApp()
//         history.push('/')
//       }
//   }
//   })