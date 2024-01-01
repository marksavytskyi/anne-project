import React from 'react';
import speakerImage from '../../images/new/1.png'; // Adjust the path as necessary
import audienceImage from '../../images/new/2.png'; // Adjust the path as necessary


const ConferenceSection = () => {
  return (
    <section className="container text-white py-24 flex flex-wrap lg:flex-nowrap justify-evenly items-center bg-opacity-90 gap-20" style={{fontFamily:"Ubuntu"}}>
      <div className=" w-full lg:w-1/2 h-full relative">
          <img src={speakerImage} alt="Speaker" className="w-2/3 full object-cover"/>

        <img src={audienceImage} alt="Audience" className="w-2/3 full -mt-[30%] ml-auto" />
      </div>
      <div className="w-full lg:w-1/2 ">
        <h2 className="text-6xl font-bold mb-4 text-center" >About Conference</h2>
        <div className="flex justify-center items-center flex-col">
          <p className="mb-4 lg:max-w-lg">
            Ми - команда з Одеси, почули покликання від Бога і віримо, що у Бога є покликання для кожної людини. Наша ціль - запросити тебе у Божу присутність, закликаємо відкрити свої вуха і серце, щоб почути покликання, прийняти для себе та виконати його на Землі
          </p>
          <p className="lg:max-w-lg ">
            «І почув я голос Господа, що говорив: Кого Я пошлю, і хто піде для Нас? А я відказав: Ось я, пошли Ти мене!»<br/>
            Iсая 6:8
          </p>
          <div className="text-lg not-italic mb-4 self-end">
            Вул. Танкістів 43а, м. Одеса
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 text-center rounded">
            <p className="text-4xl font-bold">2</p>
            <p>Days Event</p>
          </div>
          <div className="bg-gray-800 p-4 text-center rounded">
            <p className="text-4xl font-bold">4</p>
            <p>Speakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;

