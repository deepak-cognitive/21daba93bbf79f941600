const initialState = {
  posts: []
}

export const reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'GET_POSTS':
      return ({...state, posts: action.payload})
  
    default:
      return state
  }
}