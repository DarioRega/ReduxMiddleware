import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = uid => ({
  type: 'LOGIN',
  uid
})

export const startLogin = type => {
  if (type.login === 'emailAndPassword') {
    return () => {
      return firebase.auth().signInWithEmailAndPassword(type.email, type.password)
    }
  }
  if (type.login === 'google') {
    return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider)
    }
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}