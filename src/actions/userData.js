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
export const startSetUserData = () => {
  return (dispatch, getState) => {
    const uid = getState().uid
    database.ref(`users/${uid}`).once('value').then((snapshot) => {
      dispatch(setUserData(snapshot.val()))
    })
  }
}
