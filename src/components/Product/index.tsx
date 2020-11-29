import Address from '@/components/Address';
import { useCart } from '@/context/Cart/CartContext';
import cep from 'cep-promise';
import Link from 'next/link';
import { Document } from 'prismic-javascript/types/documents';
import React, { memo, useEffect, useState } from 'react';
import { FiAlertCircle, FiMapPin, FiTruck } from 'react-icons/fi';
import { ButtonPrimary, ButtonSecundary } from '../Basics/Button/styles';
import { Input, Label } from '../Basics/Input/styles';
import Select from '../Basics/Select';
import CardCollapse from '../CardCollapse';
import IconLabel from '../IconLabel';
import { Container, Delivery, Description, Error, Info, Quantity } from './styles';

interface ProductProps {
  product: Document;
  availability: boolean;
  title: string;
  stock: number;
  price: number;
  description: string;
  image: string;
  slug?: string;
}

const Product: React.FC<ProductProps> = ({product, availability, title, stock, price, description, image}) => {
  const [quantity, setQuantity] = useState(1);
  const [inputCep, setInputCep] = useState('');
  const [errorCep, setErrorCep] = useState('');
  const { setCart, address, setAddress} = useCart();

  const handleAddCart = () => {
    const data = {
      product: product,
      quantity: quantity,
      setQuantity: setQuantity,
    }
    setCart({ type: 'ADD', payload: data });
  }

  useEffect(() => {
    if (inputCep && inputCep.length === 8) { 
      cep(inputCep)
      .then(response => setAddress(response))
      .catch(error => setErrorCep(error))
    }
  }, [inputCep])

  return (
    <Container>
      <img src={image} alt={title}/>
      <Description>
        <section>
          <h2>{title}</h2>
          <span>R$ {price}</span>
        </section>
        <Info>
          <CardCollapse title="Mais Informações" body={description} expanded={true} />
        </Info>
        <Quantity>
          <Select 
            label="Quantidade:" 
            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Link href="/cart">
            <ButtonPrimary>
              <button type="button" onClick={() => handleAddCart()}>COMPRAR</button>
            </ButtonPrimary>
          </Link>
          <Link href="/cart">
            <ButtonSecundary>
              <button type="button" onClick={() => handleAddCart()}>Adicionar ao Carrinho</button>
            </ButtonSecundary>
          </Link>
        </Quantity>
        <Delivery>
          <Label>Calcular Frete (CEP):</Label>
          <Input 
          value={inputCep} 
          onChange={(e) => setInputCep(e.target.value)}
          type="number"
          />
          {address ? (
            <>
            <IconLabel icon={<FiMapPin size={15}/>} label={<Address address={address}/>}/>
            <IconLabel icon={<FiTruck size={15}/>} label={<p>Chegará {} por R$ {}</p>}/>
            </>
          ) :  (inputCep && inputCep.length === 8) ? (<Error> <FiAlertCircle size={15}/> CEP Inválido</Error>) : ''}
        </Delivery>
      </Description>
    </Container>
  )
}

export default memo(Product)
