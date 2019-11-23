
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        userData: action.userData
      }
    case 'EDIT_USER_DATA':
      return { ...action.updates }
    case 'REMOVE_USER_DATA':
      return {}
    case 'ADD_NEW_USER_DATA':
      return { ...action.data }
    default:
      return state
  }
}
