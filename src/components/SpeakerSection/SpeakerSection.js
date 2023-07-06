import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'components/App.styled';
import {
  CustomDots,
  SliderWrapper,
  SpeakerCard,
  Title,
} from './SpeakerSection.styled';

const speakersData = [
  {
    name: 'Марк Сергїїв',
    about:
      'Молодіжний  пастор, учасник гурту 4U Band, та M.Worship. Автор та виконавець популярних християнських пісень. Разом із братом Антоном заснували школу хвали і поклоніння, яка служить багатьом людям по всьому світі. Мелітополь 🇺🇦',
    image: require('../../images/mark.jpg'),
  },
  {
    name: 'Набіл Баббеісі',
    about:
      'Cтарший пастор об’єднання «House of Glory», магістр богослів‘я «Європейський Назарянський Коледж». Одеса 🇺🇦',
    image: require('../../images/nabil.jpg'),
  },
  {
    name: 'Федір Герасимов',
    about:
      'Старший пастор церкви «ХЦ Пробудження» керівник Християнської Місії «Нове Життя». Одеса 🇺🇦',
    image: require('../../images/gera.jpg'),
  },
  {
    name: 'Володимир Головач',
    about:
      'Пастор, проповідник, служитель у ц. «Сінай», музикант та мотиваційний лідер. Чернівці 🇺🇦',
    image: require('../../images/noname2.jpg'),
  },
  // Add more speakers here...
];

const SpeakerSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    appendDots: dots => <CustomDots>{dots}</CustomDots>,
    arrows: false,
  };

  return (
    <section id="section-1" style={{ backgroundColor: '#0e0e2c' }}>
      <Container>
        <SliderWrapper>
          <Title>Speakers</Title>
          <Slider {...settings}>
            {speakersData.map((speaker, index) => (
              <SpeakerCard key={index}>
                <img src={speaker.image} alt={speaker.name} />
                <h3>{speaker.name}</h3>
                <p>{speaker.about}</p>
              </SpeakerCard>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </section>
  );
};

export default SpeakerSection;
