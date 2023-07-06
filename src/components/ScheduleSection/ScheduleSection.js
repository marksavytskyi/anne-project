import React from 'react';
import { Container } from 'components/App.styled';
import {
  DayColumn,
  DayTitle,
  EventTitle,
  ScheduleCard,
  ScheduleGrid,
  Section,
  SectionTitle,
  TimeSlot,
} from './ScheduleSection.styled';

const TimeScheduleSection = () => {
  const days = ['Day 1', 'Day 2', 'Day 3'];
  const timeSlots = [
    ['15:00 - 17:00', '17:00 - 20:00'], // Day 1 has 2 time slots
    [
      '10:00 - 11:00',
      '11:00 - 13:00',
      '13:00 - 14:00',
      '14:00 - 15:00',
      '16:00 - 17:00',
      '17:00 - 19:00',
      '19:00 - ...',
    ], // Day 2 has 7 time slots
    [
      '11:00 - 13:00',
      '13:00 - 14:00',
      '14:00 - 15:30',
      '15:30 - 16:00',
      '16:00 - 18:00',
    ], // Day 3 has 5 time slots
  ];
  const events = [
    ['Реєстрація', '"Не так важливо, що ти думаєш"'], // Events for Day 1
    [
      'Реєстрація',
      '"Не так важливо, що ти думаєш"',
      'Обід',
      'Сhill-time',
      'Кахут',
      'Сhill time + трансфер до центра міста',
      'Молитва за Україну на Дерибасивській',
    ], // Events for Day 2
    [
      '"Не так важливо, що ти думаєш"',
      'Обід',
      'Talk-show',
      'Сhill-time',
      '"але Бог"',
    ], // Events for Day 3
  ];

  return (
    <Section id="section-2">
      <Container>
        <SectionTitle>Time Schedule</SectionTitle>
        <ScheduleGrid>
          {days.map((day, dayIndex) => (
            <DayColumn key={dayIndex}>
              <DayTitle>{day}</DayTitle>
              {timeSlots[dayIndex].map((timeSlot, slotIndex) => (
                <ScheduleCard key={slotIndex}>
                  <TimeSlot>{timeSlot}</TimeSlot>
                  <EventTitle>{events[dayIndex][slotIndex]}</EventTitle>
                </ScheduleCard>
              ))}
            </DayColumn>
          ))}
        </ScheduleGrid>
      </Container>
    </Section>
  );
};

export default TimeScheduleSection;
