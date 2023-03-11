import { faChevronRight as rightArrowIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { ITransaction, TransactionTypeEnum } from 'src/store/reducers/app.slice';
import { getDayOfWeekOrDate } from 'src/utils/get-day-of-week-or-date';
import './transaction-list-element.scss';

interface ITransactionListElementProps {
  transaction: ITransaction;
}

const TransactionListElement: FC<ITransactionListElementProps> = ({ transaction }) => {
  const renderElementInfo = () => {
    if (transaction.type === TransactionTypeEnum.PAYMENT) {
      return (
        <div className="tr-list-element__info">
          <div className="tr-list-element__info--top-line">
            <span>Payment</span>
            <span>+${transaction.sum}</span>
          </div>
          <div className="tr-list-element__info--middle-line">
            <span className="tr-list-element__info--middle-line-from">
              From {transaction.authorizedUser || transaction.description}
            </span>
            {/* <span className="tr-list-element__info--middle-line-percent">3%</span> */}
          </div>
          <div className="tr-list-element__info--bottom-line">
            <span>{getDayOfWeekOrDate(new Date(transaction.date))}</span>
          </div>
        </div>
      );
    } else {
      // CREDIT
      return (
        <div className="tr-list-element__info">
          <div className="tr-list-element__info--top-line">
            <span>{transaction.name}</span>
            <span>${transaction.sum}</span>
          </div>
          <div className="tr-list-element__info--middle-line">
            <span className="tr-list-element__info--middle-line-from">
              {transaction.pending && 'Pending -'} {transaction.description}
            </span>
            <span className="tr-list-element__info--middle-line-percent">3%</span>
          </div>
          <div className="tr-list-element__info--bottom-line">
            <span>{getDayOfWeekOrDate(new Date(transaction.date))}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="tr-list-element">
      <div className="tr-list-element__content">
        <div className="tr-list-element__image">
          <div className="tr-list-element__image--img"></div>
        </div>
        {renderElementInfo()}
        <div className="tr-list-element__arrow">
          <FontAwesomeIcon icon={rightArrowIcon} />
        </div>
      </div>
      <div className="tr-list-element__bottom">
        <div className="tr-list-element__bottom--line"></div>
      </div>
    </div>
  );
};

export default TransactionListElement;
