import database from '../firebase/firebase'

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
        console.log('child snapshot val : ', childSnapshot.val())
        userData = childSnapshot.val()
      })
      console.log('inside database ref :value', userData)
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
    console.log('data : ', data)
    return database.ref(`users/${uid}/`).push(data).then(() => dispatch(registerUserData(data)))
  }
}
