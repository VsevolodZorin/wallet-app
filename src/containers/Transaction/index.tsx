import { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from 'src/hooks/redux';
import { selectTransactionById } from 'src/store/selectors';

const Transaction: FC = () => {
  const { transactionId } = useParams();

  const transaction = useAppSelector(state => selectTransactionById(state, +transactionId!));

  const renderTransaction = useCallback(() => {
    if (transaction) {
      return (
        <div>
          <p>{transaction.id}</p>
          <p>{transaction.date}</p>
        </div>
      );
    }
    return 'sdf';
  }, [transaction]);

  return <h1>{renderTransaction()}</h1>;
};

export default Transaction;
