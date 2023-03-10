import { faChevronLeft as leftArrowIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { selectTransactionById } from 'src/store/selectors';
import { getDate } from 'src/utils/get-date';
import { getTime } from 'src/utils/get-time';
import './transaction.scss';

const Transaction: FC = () => {
  const { transactionId } = useParams();

  const transaction = useAppSelector(state => selectTransactionById(state, +transactionId!));

  const renderTransaction = useCallback(() => {
    if (transaction) {
      return (
        <>
          <div className="transaction__arrow">
            <Link to={'/'}>
              <FontAwesomeIcon icon={leftArrowIcon} className="transaction__arrow--left" />
            </Link>
          </div>
          <div className="transaction__top-part">
            <span className="transaction__top-part--sum">$7.50</span>
            <span>Airalo</span>
            <span>
              {getDate(new Date(transaction.date)) + ', ' + getTime(new Date(transaction.date))}
            </span>
          </div>
          <div className="transaction__bottom-part ui-block">
            <div className="transaction__bottom-part--status">
              <span className="transaction__text--title">Status: Approved</span>
              <span>RBC Bank Debit Card</span>
            </div>
            <hr className="transaction__bottom-part--line" />
            <div className="transaction__bottom-part--total">
              <span className="transaction__text--title">Total</span>
              <span className="transaction__text--title">$7.50</span>
            </div>
          </div>
        </>
      );
    }
    return null;
  }, [transaction]);

  return <div className="transaction">{renderTransaction()}</div>;
};

export default Transaction;
