import { Title } from './Offer.styled';
import CountDown from '../CountDown';


const Offer = () => {

    return (
      <section className="container absolute top-1/2 left-1/2 lg:left-20 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 lg:w-1/2">
        <div className="">
          <Title className="text-center md:text-sm mb-7 sm:mb-10 lg:mb-14">Spirit Overhaul conference</Title>
          <CountDown/>
        </div>
      </section>
    );
};

export default Offer;
