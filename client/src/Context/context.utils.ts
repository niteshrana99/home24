export function combineReducers(reducers: any) {  
    return (state: any = {}, action: any) => {
      const newState: any = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
}