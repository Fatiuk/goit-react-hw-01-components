import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TransactionHeadRow,
  TransactionHeadHeader,
  TransactionBody,
  TransactionBodyRow,
  TransactionBodyHeader,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <TransactionHeadRow>
          <TransactionHeadHeader>Type</TransactionHeadHeader>
          <TransactionHeadHeader>Amount</TransactionHeadHeader>
          <TransactionHeadHeader>Currency</TransactionHeadHeader>
        </TransactionHeadRow>
      </TransactionHead>

      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionBodyRow key={id}>
            <TransactionBodyHeader>{type}</TransactionBodyHeader>
            <TransactionBodyHeader>{amount}</TransactionBodyHeader>
            <TransactionBodyHeader>{currency}</TransactionBodyHeader>
          </TransactionBodyRow>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
