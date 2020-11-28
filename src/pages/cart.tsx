import Header from "@/components/Header";
import Increment from "@/components/Increment";
import { useCart } from '@/context/Cart/CartContext';
import { ThumbnailSmall } from "@/styles/genericStyles";
import { Address, Card, Container, Info, Total } from "@/styles/pages/Cart/styles";
import PrismicDOM from 'prismic-dom';
import { useEffect } from "react";
import { FiCalendar, FiEdit2, FiMapPin, FiTruck } from "react-icons/fi";

export default function Cart() {
  const {cart, address } = useCart();
  
  useEffect(() => {
    console.log(cart);
  }, [cart])
  // setCart({ type: 'ADD', payload: item });
  // setCart({ type: 'REMOVE', payload: product.id });

  return (
    <>
      <Header />
      <Container>
        {cart.map(item => (
          <Card key={item.product.id}>
            <section>
            <ThumbnailSmall src={item.product.data.thumbnail.url} alt=""/>
            <Info>
              <span>{PrismicDOM.RichText.asText(item.product.data.name)}</span>
              <Address>
                <FiCalendar size={15}/>
                <p>Chegará em </p>
              </Address>
              <div>
                <span>R$ {item.quantity * item.product.data.price}</span>
              </div>
            </Info>
            </section>
            <Increment initial={item.quantity}/>
          </Card>
        ))}
        <Card>
          <Total>
            <p>Endereço de entrega: </p>
            <Address>
              <FiMapPin size={15}/>
              <p>{address.street}, {address.neighborhood}, {address.city} - {address.state}</p>
              <button>
                <FiEdit2 size={15} />
              </button>
            </Address>
            <p>Valor do frete: </p>
            <Address>
              <FiTruck size={15} />
              <p>R$ 36,90</p>
            </Address>
          </Total>
        </Card>
      </Container>
    </>
  );
}