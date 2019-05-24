export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ARTISTS_ALL':
        return {...state,artistList:action.payload}
    default:
        return state
  }
};
