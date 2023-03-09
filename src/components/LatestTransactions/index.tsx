import TransactionsList from '../TransactionsList';
import './latest-transactions.scss';

const LatestTransactions = () => {
  return (
    <section className="latest-transactions">
      <span>LatestTransactions</span>
      <TransactionsList />
    </section>
  );
};

export default LatestTransactions;
