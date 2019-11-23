import database from '../firebase/firebase'
import firebase from 'firebase/app'
import 'firebase/auth' 

export const editUserData = (updates) => ({
  type: 'EDIT_USER_DATA',
  updates
})

export const startEditUserData = updates => {
  return (dispatch, getState) => {
    const uid = getState().uid
    return database.ref(`users/${uid}`).set({ ...updates }).then(() => {
      dispatch(editUserData(updates))
    })
  }
}

export const removeUserData = () => ({
  type: 'REMOVE_USER_DATA'
})

export const startRemoveUserData = () => {
  return (dispatch, getState) => {
    const uid = getState().uid
    return database.ref(`${uid}`).set({}).then(() => {
      dispatch(removeUserData())
    })
  }
}

export const setUserData = data => ({
  type: 'SET_USER_DATA',
  userData: data
})

// Middleware
export const startSetUserData = uid => {
  return (dispatch) => {
    console.log('in startSetUserData')
    return database.ref(`users/${uid}`).once('value').then((snapshot) => {
      let userData = {}
      snapshot.forEach(childSnapshot => {
        userData = childSnapshot.val()
      })
      dispatch(setUserData(userData))
    })
  }
}

export const registerUserData = data => ({
  type: 'ADD_NEW_USER_DATA',
  data
})

export const startRegisterUserData = (data, uid) => {
  return (dispatch) => {
    return database.ref(`users/${uid}/`).push(data).then(() => dispatch(registerUserData(data)))
  }
}

export const changeUserCreds = values => ({
  type: 'CHANGE_USER_CREDS',
  updates: {
    email: values.email,
    password: values.password
  }
})
 

export const startChangeUserCreds = values => {
  return (dispatch, getState) => {
    const previousEmail = getState().userData.email
    const previousPassword = getState().userData.password
    reauthenticate(previousEmail, previousPassword).then(() => {
      // const user = firebase.auth
      const user = getCurrentUser()
      console.log('reauth worked fine')
      user.updateEmail(values.email).then(() => {
        user.updatePassword(values.password).then(() => {
          dispatch(changeUserCreds(values))
        })
      })
    })
  }
}

const reauthenticate = (email, password) => {
  const user = getCurrentUser()
  const creds = firebase.auth.EmailAuthProvider.credential(email, password)
  return user.reauthenticateWithCredential(creds)
}

const getCurrentUser = () => {
  return firebase.auth().currentUser
}