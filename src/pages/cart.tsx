import Address from '@/components/Address';
import { ButtonPrimary } from '@/components/Basics/Button/styles';
import Header from "@/components/Header";
import IconLabel from "@/components/IconLabel";
import Increment from "@/components/Increment";
import { useCart } from '@/context/Cart/CartContext';
import { ThumbnailSmall } from "@/styles/genericStyles";
import { Card, Column, Container, Info, Row, Total } from "@/styles/pages/Cart/styles";
import Link from 'next/link';
import PrismicDOM from 'prismic-dom';
import { FiCalendar, FiMapPin, FiTruck } from "react-icons/fi";

export default function Cart() {
  const {cart, address } = useCart();

  return (
    <>
      <Header />
      <Container>
        {cart.map(item => {
          let quantity = parseInt(item.quantity);
          return (
            <Card key={item.product.id}>
              <section>
                <ThumbnailSmall src={item.product.data.thumbnail.url} alt=""/>
                <Info>
                  <span>{PrismicDOM.RichText.asText(item.product.data.name)}</span>
                  <IconLabel icon={<FiCalendar size={15}/>} label={<p>Chegará em </p>}/>
                  <div>
                    <span>R$ {quantity * parseInt(item.product.data.price)}</span>
                  </div>
                </Info>
              </section>
              <Increment initial={quantity}/>
            </Card>
          )}
        )}
        <Card>
          <Total>
            <Column>
              <p>Endereço de entrega: </p>
              <IconLabel icon={(<FiMapPin size={15}/>)} label={<Address address={address}/>} />
            </Column>
            <br/>
            <Row>
              <Column>
                <p>Valor do frete: </p>
                <IconLabel icon={(<FiTruck size={15} />)} label={<p>R$ 36,90</p>} />
              </Column>
              <Column>
                <p>Total:</p>
                <span>R$ 415</span>
              </Column>
            </Row>
          </Total>
        </Card>
        <Link href="/payment">
          <ButtonPrimary>
            <button type="button">FINALIZAR</button>
          </ButtonPrimary>
        </Link>
      </Container>
    </>
  );
}