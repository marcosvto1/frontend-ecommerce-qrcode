import React, {useContext} from 'react'
import { store } from '../../store'


const Header = () => {
  const {state, dispatch } = useContext(store);
  console.log(state);
  return (
    <div>
      <button onClick={() => {
        dispatch({type: 'CHANGE_THEME'})
      }}> DARK MODE: { state.isDark ? 'yes': 'not' }</button>
    </div>
  )
}

export default Header;