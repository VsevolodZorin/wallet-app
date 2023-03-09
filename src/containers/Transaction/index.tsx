import { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { selectTransactionById } from 'src/store/selectors';

const Transaction: FC = () => {
  const { transactionId } = useParams();

  const transaction = useAppSelector(state => selectTransactionById(state, +transactionId!));

  const renderTransaction = useCallback(() => {
    if (transaction) {
      return (
        <div>
          <Link to={'/'}>home</Link>
          <p>{transaction.id}</p>
          <p>{transaction.date}</p>1
        </div>
      );
    }
    return 'sdf';
  }, [transaction]);

  return <h1 className="">{renderTransaction()}</h1>;
};

export default Transaction;
