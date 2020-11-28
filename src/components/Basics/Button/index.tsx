import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonPrimary, ButtonSecundary } from './styles';

const Button = ({title, secundary = false, handleClick}) => {
  if (secundary) {
    const history = useHistory();
    return (
      <ButtonSecundary>
        {title}
      </ButtonSecundary>
    )
  } else {
    return (
      <ButtonPrimary>
        {title}
      </ButtonPrimary>
    )
  }
}

export default memo(Button)
