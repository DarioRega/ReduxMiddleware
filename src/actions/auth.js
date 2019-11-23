import { firebase, googleAuthProvider } from '../firebase/firebase'
import { startSetUserData, startRegisterUserData } from './userData'

export const login = userId => ({
  type: 'LOGIN',
  uid: userId
})

export const startLogin = type => {
  return (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(type.email, type.password).then((userData) => {
      console.log('user id : ', userData.user.uid)
      dispatch(startSetUserData(userData.user.uid)).then(() => {
        dispatch(login(userData.user.uid))
      })
    })
  }
  // if (type.login === 'google') {
  //   return () => {
  //     return firebase.auth().signInWithPopup(googleAuthProvider)
  //   }
  // }
}

// export const register = user => ({
//   type: 'REGISTER',
//   user
// })

export const startRegister = user => {
  return (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((creds) => {
      user.type = null
      console.log('data in startReigster', creds)
      dispatch(startRegisterUserData(user, creds.user.uid )).then(() => {
        dispatch(login(creds.user.uid))
      })
    })
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    console.log('logout')
    return firebase.auth().signOut()
  }
}
