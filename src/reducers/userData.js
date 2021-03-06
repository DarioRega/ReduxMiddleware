
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.userData

    case 'EDIT_USER_DATA':
      return { ...action.updates }
    case 'REMOVE_USER_DATA':
      return {}
    case 'ADD_NEW_USER_DATA':
      return { ...action.data }
    case 'CHANGE_USER_CREDS':
      return { ...state, ...action.updates }
    default:
      return state
  }
}
