import React, { useState } from 'react';
import { IoTriangle } from "react-icons/io5";
import Button from '@mui/material/Button';

// Mock data representing the schedule for three days
const scheduleData = [
  {
    date: 'Четвер, 22 Лютого 2023',
    events: [
      { time: '15:00', title: 'Реєстрація', description: 'Започаткуйте свій досвід на конференції з реєстрації та отримання інформаційних матеріалів.' },
      { time: '17:00', title: 'Вечір хвали та поклоніння', description: 'Долучайтеся до нас для вечора духовного піднесення та музичного вдосконалення.' },
    ],
  },
  {
    date: 'Пʼятниця, 23 Лютого 2023',
    events: [
      { time: '10:00', title: 'Реєстрація', description: 'Продовження реєстрації. Зустрічайте нових учасників та готуйтеся до дня, сповненого навчанням.' },
      { time: '11:00', title: 'Cлужіння', description: 'Насолоджуйтесь натхненними посланнями та особистими свідченнями.' },
      { time: '13:00', title: 'Обід', description: 'Час на обід та неформальне спілкування з іншими учасниками.' },
      { time: '14:00', title: 'Воркшоп', description: 'Відвідайте наші воркшопи, щоб поглибити знання в обраній сфері.' },
      { time: '15:00', title: 'Кава брейк', description: 'Перерва на каву, час для обговорення та відпочинку.' },
      { time: '15:30', title: 'Панелька', description: 'Панель дискусій з експертами на актуальні теми.' },
      { time: '16:30', title: 'Кава брейк', description: 'Ще одна можливість насолодитися кавою та легкими закусками.' },
      { time: '17:00', title: 'Служіння', description: 'Заключне служіння дня з особливими гостями та виступами.' },
    ],
  },
  {
    date: 'Субота, 24 Лютого 2023',
    events: [
      { time: '11:00', title: 'Служіння', description: 'Почніть день з мотиваційної лекції та особистого розвитку.' },
      { time: '13:00', title: 'Обід', description: 'Обідня перерва, відмінна нагода для нетворкінгу.' },
      { time: '14:00', title: 'Служіння', description: 'Глибокі духовні бесіди та медитація.' },
      { time: '16:00', title: 'Молитва. закриття конференції', description: 'Завершальна молитва і церемонія закриття з подякою всім учасникам.' },
    ],
  },
];


const ConferenceSchedule = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handlePrev = () => {
    if(currentIdx > 0) {
      setCurrentIdx(currentIdx - 1)
    }
  }
  const handleNext = () => {
    if(currentIdx < scheduleData.length - 1) {
      setCurrentIdx(currentIdx + 1)
    }
  }
  return (
    <div className="container text-white p-10">
      <h1 className="text-6xl font-extrabold text-center mb-12">Conference Schedule</h1>
      {scheduleData.map((day, idx) => {
        if(idx === currentIdx) {
          return  <div key={day.date} className="mb-8 w-1/2 mx-auto">
            <div className="flex gap-4 justify-center items-center mb-6">
              <IoTriangle onClick={handlePrev} color="orange" size="30" className="-rotate-90"/>
              <h2 className="text-3xl font-bold  text-center">{day.date}</h2>
              <IoTriangle onClick={handleNext} color="orange" size="30" className="rotate-90"/>
            </div>

            {day.events.map((event, idx) => (
              <div key={idx} className="flex flex-row-reverse gap-14 items-center mb-4 w-full p-12 bg-[#2D3640]">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <span className="w-32 text-xl font-bold text-right">{event.time}</span>
              </div>
            ))}

          </div>

        }
      })}
         </div>
  );
};

export default ConferenceSchedule;
