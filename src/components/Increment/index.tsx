import React, { memo, useState } from 'react';
import { Container } from './styles';

interface IncrementProps {
  // title: string;
  initial?: any;
  max?: number;
  min?: number;
  vertical?: boolean;
}

const Increment: React.FC<IncrementProps> = ({ initial, max = 100, min = 0 }) => {
  const [quantity, setQuantity] = useState(parseInt(initial));
  
  function increment() {
    if ((quantity) < max) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Container >
      <button type="button" onClick={() => increment()}>+</button>
      <p>{quantity}</p>
      <button type="button" onClick={() => decrement()}>-</button>
    </Container>
  );
}

export default memo(Increment)
