import React, { memo } from 'react';

function Address({address}) {
  return (
    <p>{address.street}, {address.neighborhood}, {address.city} - {address.state}</p>
  )
}

export default memo(Address);
