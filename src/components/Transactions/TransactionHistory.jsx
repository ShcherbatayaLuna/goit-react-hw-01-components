import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { TranHistory, TitleBox, Title } from './Transactions.styled';

export default function TransactionHistory({ items }) {
  return (
    <TranHistory>
      <thead>
        <TitleBox>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </TitleBox>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </TranHistory>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
