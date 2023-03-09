import './card-balance.scss';

const CardBalance = () => {
  // limit
  return (
    <div className="card-balance ui-block">
      <span className="ui-block--title">Card Balance</span>
      <span className="card-balance--credit">$17.30</span>
      <span className="card-balance--available">$1,482.70 Available</span>
    </div>
  );
};

export default CardBalance;
