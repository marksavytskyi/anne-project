import { Title } from './Offer.styled';
import CountDown from '../CountDown';


const Offer = () => {

    return (
      <section className="container absolute top-1/2 left-0 -translate-y-1/2 w-1/2">
        <div className="">
          <Title className="text-center mb-14">Spirit Overhaul conference</Title>
          <CountDown/>
        </div>
      </section>
    );
};

export default Offer;
