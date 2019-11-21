
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

    default:
      return state
}