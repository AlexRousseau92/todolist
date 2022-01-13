import PropTypes from 'prop-types';
import './style.scss';

const Counter = ({ counter }) => (
  <p className="counter">{counter} tâche{counter > 1 ? 's' : ''} en cours</p>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};
export default Counter;
