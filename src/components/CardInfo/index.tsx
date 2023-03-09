import CardBalance from './parts/CardBalance';
import DailyPoints from './parts/DailyPoints';
import NoPaymentDue from './parts/NoPaymentDue';
import './card-info.scss';

const CardInfo = () => {
  return (
    <section className="cardInfo">
      <div className="cardInfo__grid-container">
        <div className="cardInfo__grid-container--item-1">
          <CardBalance />
        </div>
        <div className="cardInfo__grid-container--item-2">
          <DailyPoints />
        </div>
        <div className="cardInfo__grid-container--item-3">
          <NoPaymentDue />
        </div>
      </div>
    </section>
  );
};

export default CardInfo;
