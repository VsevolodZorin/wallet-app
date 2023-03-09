import { FC, useCallback } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { selectTransactions } from 'src/store/selectors';
import TransactionListElement from './parts/TransactionListElement';
import './transactions-list.scss';

const TransactionsList: FC = () => {
  const transactions = useAppSelector(selectTransactions);

  const renderList = useCallback(() => {
    if (transactions) {
      return transactions.map(el => (
        <li key={el.id}>
          <TransactionListElement transaction={el} />
        </li>
      ));
    }
    return null;
  }, [transactions]);

  return (
    <div className="transactions-list">
      <ul>{renderList()}</ul>
    </div>
  );
};

export default TransactionsList;
