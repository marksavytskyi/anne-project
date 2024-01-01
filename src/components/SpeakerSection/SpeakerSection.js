import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from "../../images/logo.jpg"

const speakersData = [
  {
    name: 'Стас Герасімов',
    about:
      'Молодіжний  пастор',
    image: require('../../images/new/stas.png'),
  },
  {
    name: 'Марк Сергеєв',
    about:
      'Молодіжний  пастор',
    image: require('../../images/new/mark.png'),
  },
  {
    name: 'Давід Ткаченко',
    about:
      'Молодіжний  пастор',
    image: require('../../images/new/tkachenko.png'),
  },
  {
    name: 'Микола Савчук',
    about:
      'Пастор',
    image: require('../../images/new/mikola.jpg'),
  },
  // Add more speakers here...
];

const SpeakerSection = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear',
  //   appendDots: dots => <CustomDots>{dots}</CustomDots>,
  //   arrows: false,
  //   autoplay: true,
  //   focusOnSelect: true,
  //   autoplaySpeed: 5000,
  // };

  return (
    <section className="container text-white p-10 pb-24">
      <h1 className="text-6xl text-white font-extrabold text-center mb-24" style={{ fontFamily: "Ubuntu" }}>Speakers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 gap-y-10 lg:gap-x-0">
        {speakersData.map((speaker, idx) => {
          // Assuming you have an even number of speakers, insert the logo after the first and third items
          const insertLogo = idx === 0 || idx === 2;
          return (
            <React.Fragment key={speaker.id}>
              <div className="overflow-hidden flex justify-center items-center">
                <img src={speaker.image} alt={speaker.name} className="w-full h-auto" />
              </div>
              {insertLogo && (
                <div className="hidden lg:flex justify-center items-center">
                  <img src={logo} alt="Logo" className="w-1/2 h-auto rounded-full" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default SpeakerSection;
