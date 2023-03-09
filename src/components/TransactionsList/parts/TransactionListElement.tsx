import React, { FC } from 'react';
import { ITransaction } from 'src/store/reducers/app.slice';

type TransactionListElementProps = Omit<ITransaction, 'id'>;

const TransactionListElement: FC<TransactionListElementProps> = ({}) => {
  return <li>TransactionListElement</li>;
};

export default TransactionListElement;
