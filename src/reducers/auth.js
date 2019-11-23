
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    case 'REGISTER':
      return {
        uid: action.uid
      }
    case 'SET_MEMBER_STATUS':
      return { ...state, ...action.isAlreadyMember }
    case 'ADD_USER_REF':
      return { ...state, ...action.ref }
    default:
      return state
  }
}
