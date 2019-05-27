const INITIAL_STATE = {
  c1: false,
  c2: false,
  c3: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'VIEW_C1':
      if(state.c1 === false) {
        state.c2=false;
        state.c3=false;
        return {...state, c1: action.payload}
      } else {
        return {...state, c1: !action.payload}
      }

    case 'VIEW_C2':
      if(state.c2 === false) {
        state.c1=false;
        state.c3=false;
        return {...state, c2: action.payload}
      } else {
        return {...state, c2: !action.payload}
      }

    case 'VIEW_C3':
      if(state.c3 === false) {
        state.c1=false;
        state.c2=false;
        return {...state, c3: action.payload}
      } else{
        return {...state, c3: !action.payload}
      }

    default:
      return state;
  }
}