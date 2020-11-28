import { Address } from '@/styles/pages/Cart/styles';
import React, { memo } from 'react';

function IconLabel({icon, label}) {
  return (
    <Address>
      {icon}
      {label}
    </Address>
  )
}

export default memo(IconLabel);
