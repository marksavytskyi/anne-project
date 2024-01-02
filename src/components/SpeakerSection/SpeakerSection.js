import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from "../../images/logo.jpg"

const speakersData = [
  {
    name: 'Микола Савчук',
    about:
      'Єпископ в обʼєднанні церков «Спасіння», журналіст, спікер ',
    image: require('../../images/new/mikola.jpg'),
  },
  {
    name: 'Стас Герасімов',
    about:
      'Молодіжний пастор церкви «Християнський центр Пробудження», капелан, волонтер',
    image: require('../../images/new/stas.png'),
  },
  {
    name: 'Марк Сергеєв',
    about:
      'Молодіжний пастор МХЦ, Мелітополь. Учасник групи прославлення «M.Worship», фронт-мен християнської сучасної групи 4Uband',
    image: require('../../images/new/mark.png'),
  },
  {
    name: 'Давід Ткаченко',
    about:
      'Молодіжний  лідер',
    image: require('../../images/new/tkachenko.png'),
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
              <div className="flex flex-col">
                <div className="overflow-hidden flex justify-center items-center ">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-auto" />
                </div>
                <div className="bg-black bg-opacity-50 h-auto sm:h-[200px] lg:h-[150px] w-full p-4 text-center flex justify-center items-center">
                  <p className="font-semibold text-sm md:text-2xl" style={{fontFamily: "Ubuntu"}}>{speaker.about}</p>
                </div>

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
