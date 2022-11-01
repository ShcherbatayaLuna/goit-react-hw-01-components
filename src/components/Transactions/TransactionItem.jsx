import PropTypes from 'prop-types';
import { DescrBox, Description } from './Transactions.styled';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <DescrBox>
      <Description>{type}</Description>
      <Description>{amount}</Description>
      <Description>{currency}</Description>
    </DescrBox>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
