import React from 'react';

import {
  AnimatedShadow,
  DayColumn,
  DayTitle,
  ScheduleCard,
  Section,
  SectionTitle,
  StyledContainer,
  StyledNextArrow,
  StyledPrevArrow,
} from './ScheduleSection.styled';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import the three images for the carousel
import image1 from 'images/schedule1.jpg';
import image2 from 'images/schedule2.jpg';
import image3 from 'images/schedule3.jpg';

const TimeScheduleSection = () => {
  const days = ['Day 1', 'Day 2', 'Day 3'];

  const CustomPrevArrow = ({ onClick }) => (
    <StyledPrevArrow
      onClick={onClick}
      onMouseEnter={e =>
        (e.target.style.transform = 'translateY(-50%) scale(1.1)')
      }
      onMouseLeave={e =>
        (e.target.style.transform = 'translateY(-50%) scale(1)')
      }
    >
      Prev
    </StyledPrevArrow>
  );

  const CustomNextArrow = ({ onClick }) => (
    <StyledNextArrow
      onClick={onClick}
      onMouseEnter={e =>
        (e.target.style.transform = 'translateY(-50%) scale(1.1)')
      }
      onMouseLeave={e =>
        (e.target.style.transform = 'translateY(-50%) scale(1)')
      }
    >
      Next
    </StyledNextArrow>
  );
  return (
    <Section id="section-2">
      <StyledContainer>
        <SectionTitle>Time Schedule</SectionTitle>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={50}
          interval={0} // Disable auto-rotation
          selectedItem={1} // Set Day 2 as the initially centered slide
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <CustomPrevArrow onClick={onClickHandler} label={label} />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <CustomNextArrow onClick={onClickHandler} label={label} />
            )
          }
        >
          {days.map((day, dayIndex) => (
            <DayColumn key={dayIndex}>
              <DayTitle>{day}</DayTitle>
              {dayIndex !== 0 && <div style={{ marginRight: '20px' }} />}
              <ScheduleCard>
                <img
                  src={
                    dayIndex === 0 ? image1 : dayIndex === 1 ? image2 : image3
                  }
                  alt={`Day ${dayIndex + 1}`}
                />
              </ScheduleCard>
            </DayColumn>
          ))}
        </Carousel>
        <AnimatedShadow />
      </StyledContainer>
    </Section>
  );
};

export default TimeScheduleSection;
