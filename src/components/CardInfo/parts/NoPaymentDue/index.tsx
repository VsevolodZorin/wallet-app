import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentMonth } from 'src/utils/get-current-month';
import './no-payment-due.scss';

const NoPaymentDue = () => {
  return (
    <div className="no-payment-due ui-block">
      <div className="no-payment-due__text">
        <span className="ui-block--title">No Payment Due</span>
        <span>You’ve paid you</span>
        <span>{getCurrentMonth(new Date())} balance</span>
      </div>
      <div className="no-payment-due__status">
        <FontAwesomeIcon icon={faCircleCheck} className="no-payment-due__status--icon" />
      </div>
    </div>
  );
};

export default NoPaymentDue;
