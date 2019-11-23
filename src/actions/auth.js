import { firebase, googleAuthProvider } from '../firebase/firebase'
import { startSetUserData, startRegisterUserData } from './userData'

export const login = userId => ({
  type: 'LOGIN',
  uid: userId
})

export const startLogin = type => {
  return (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(type.email, type.password).then((userData) => {
      console.log('user id : ', userData.user.id)
      dispatch(startSetUserData(userData.user.id)).then(() => {
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
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((data) => {
      console.log('data in startReigster', data)
      const userData = {
        uid: data.user.uid,
        ...user
      }
      dispatch(startRegisterUserData(userData))
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
