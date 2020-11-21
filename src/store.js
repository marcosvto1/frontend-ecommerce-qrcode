import React, { createContext, useReducer } from 'react';

const initalState = {
  isDark: false
}
const store = createContext(initalState);
console.log(store);

const { Provider } = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE_THEME':
        const isDark = state.isDark;
        return {...state, isDark: !isDark}
      default:
        throw new Error()
    }
  }, initalState);

  return <Provider value={{ state, dispatch}}>{ children }</Provider>;
}

export {store, StateProvider }