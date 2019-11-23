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
    return database.ref(`users/${uid}`).set({}).then(() => {
      dispatch(removeUserData())
    })
  }
}

export const setUserData = data => ({
  type: 'SET_USER_DATA',
  data
})

// Middleware
export const startSetUserData = uid => {
  return (dispatch, getState) => {
    console.log('in startSetUserData')
     return database.ref(`users/${uid}`).once('value').then((snapshot) => {
        console.log('inside database ref :value', snapshot.val())
        dispatch(setUserData(snapshot.val()))
      })

  }
}

export const registerUserData = data => ({
  type: 'ADD_NEW_USER_DATA',
  data
})

export const startRegisterUserData = data => {
  return (dispatch) => {
    console.log('data : ', data)
    return database.ref('users').push({ data }).then(() => dispatch(registerUserData(data)))
  }
}