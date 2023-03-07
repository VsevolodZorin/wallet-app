import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { selectTransactions } from 'src/store/selectors';

const TransactionsList: FC = () => {
  const transactions = useAppSelector(selectTransactions);

  const renderList = useCallback(() => {
    if (transactions) {
      return transactions.map(el => (
        <li key={el.id}>
          <Link to={`/${el.id}`}>
            <span>{el.name}</span>
          </Link>
        </li>
      ));
    }
    return null;
  }, [transactions]);

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default TransactionsList;
