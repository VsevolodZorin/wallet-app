import TransactionsList from '../TransactionsList';
import './latest-transactions.scss';

const LatestTransactions = () => {
  return (
    <section className="latest-transactions">
      <span className="latest-transactions--title">Latest Transactions</span>
      <TransactionsList />
    </section>
  );
};

export default LatestTransactions;
