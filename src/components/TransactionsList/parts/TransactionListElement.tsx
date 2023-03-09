import { FC } from 'react';
import { ITransaction } from 'src/store/reducers/app.slice';
import './transaction-list-element.scss';

interface ITransactionListElementProps {
  transaction: ITransaction;
}

const TransactionListElement: FC<ITransactionListElementProps> = ({ transaction }) => {
  const renderElementInfo = () => {};

  return (
    <div className="tr-list-element">
      <div className="tr-list-element__content">
        <div className="tr-list-element__image">
          <div className="tr-list-element__image--img"></div>
        </div>
        <div className="tr-list-element__info"></div>
        <div className="tr-list-element__arrow">{'>'}</div>
      </div>
      <div className="tr-list-element__bottom">
        <div className="tr-list-element__bottom--line"></div>
      </div>
    </div>
  );
};

export default TransactionListElement;
