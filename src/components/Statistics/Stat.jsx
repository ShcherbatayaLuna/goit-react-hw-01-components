import PropTypes from 'prop-types';
import { Item, Label } from './Stat.styled';

export default function Stat({ label, percentage }) {
  return (
    <Item>
      <Label>{label}</Label>
      <span>{percentage}%</span>
    </Item>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
