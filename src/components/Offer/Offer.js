import { Container } from 'components/App.styled';
import {
  OfferWrapper,
  DescWrapper,
  Title,
  Subtitle,
  Input,
  Button,
  ImageWrapper,
  Image,
} from './Offer.styled';
import WithMaterialUI from 'components/Form/Form';

const Offer = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'row' }}>
      <Container>
        <OfferWrapper>
          <DescWrapper style={{ flex: 1 }}>
            <Title>spirit overhaul conference</Title>
            <Subtitle>
              Ми - команда з Одеси, почули покликання від Бога і віримо, що Він
              розкриє кожному особливе послання на цій конференції!
            </Subtitle>
            <WithMaterialUI></WithMaterialUI>
          </DescWrapper>
          {/* <ImageWrapper style={{ flex: 1 }}>
            <Image src={require('../../images/header.png')} alt="img"></Image>
          </ImageWrapper> */}
        </OfferWrapper>
      </Container>
    </section>
  );
};

export default Offer;
