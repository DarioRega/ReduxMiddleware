import { firebase, googleAuthProvider } from '../firebase/firebase'
import { startSetUserData, startRegisterUserData } from './userData'
import { history } from '../router/AppRouter'

export const login = userId => ({
  type: 'LOGIN',
  uid: userId
})

export const startLogin = (values, type) => {
  return (dispatch) => {
    if (type === 'emailAndPassword') {
      return firebase.auth().signInWithEmailAndPassword(values.email, values.password).then((userData) => {
        console.log(userData)
        console.log('user id : ', userData.user.uid)
        dispatch(startSetUserData(userData.user.uid)).then(() => {
          dispatch(login(userData.user.uid))
          dispatch(setMemberStatus({ isAlreadyMember: true }))
          history.push('/welcome')
        })
      })
    } else {
      return firebase.auth().signInWithPopup(googleAuthProvider).then((userData) => {
        dispatch(startSetUserData(userData.user.uid)).then(() => {
          dispatch(login(userData.user.uid))
          dispatch(setMemberStatus({ isAlreadyMember: true }))
          history.push('/welcome')
        })
      })
    }
  }
}

// export const register = user => ({
//   type: 'REGISTER',
//   user
// })

export const startRegister = user => {
  return (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((creds) => {
      console.log('data in startReigster', creds)
      dispatch(startRegisterUserData(user, creds.user.uid)).then(() => {
        dispatch(login(creds.user.uid))
        dispatch(setMemberStatus({ isAlreadyMember: false }))
        history.push('/welcome')
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


export const setMemberStatus = isAlreadyMember => ({
  type: 'SET_MEMBER_STATUS',
  isAlreadyMember
})
