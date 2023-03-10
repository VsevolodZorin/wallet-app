import { useAppSelector } from 'src/hooks/redux';
import { selectCardBalance, selectCardLimit } from 'src/store/selectors';
import './card-balance.scss';

const CardBalance = () => {
  const balance = useAppSelector(selectCardBalance);
  const limit = useAppSelector(selectCardLimit);
  // limit
  return (
    <div className="card-balance ui-block">
      <span className="ui-block--title">Card Balance</span>
      <span className="card-balance--credit">${balance}</span>
      <span className="card-balance--available">${limit! - balance!} Available</span>
    </div>
  );
};

export default CardBalance;
