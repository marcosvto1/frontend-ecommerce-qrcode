import React, { memo, useState } from 'react';
import { Container } from './styles';

interface IncrementProps {
  // title: string;
  initial?: number;
  max?: number;
  min?: number;
  vertical?: boolean;
}

const Increment: React.FC<IncrementProps> = ({ initial, max = 100, min = 0, vertical = false }) => {
  const [quantity, setQuantity] = useState(initial.toString());
  
  function increment() {
    if (parseInt(quantity) < max) {
      let sum = parseInt(quantity) + 1;
      setQuantity(sum.toString());
    }
  }

  function decrement() {
    if (parseInt(quantity) > min) {
      let subtract = parseInt(quantity) - 1;
      setQuantity(subtract.toString());
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
