import PropTypes from 'prop-types';
import './style.scss';

const Liste = ({ data, onTaskClick }) => (
  <div>
    <ul className="list">
      {
    data.map(({ id, label, done }) => (
      <li key={id}>
        <label htmlFor={id} className={done ? 'list-item list-item--done' : 'list-item'}>
          <input
            id={id}
            type="checkbox"
            checked={done}
            onChange={() => {
              onTaskClick({ id, label, done });
            }}
          />
          {label}
        </label>
      </li>
    ))
  }
    </ul>
  </div>
);

const {
  number, string, bool, arrayOf, shape, func, oneOfType,
} = PropTypes;
Liste.propTypes = {
  data: arrayOf(shape({
    id: oneOfType([number, string]).isRequired,
    label: string.isRequired,
    done: bool.isRequired,
  })).isRequired,
  onTaskClick: func.isRequired,
};
export default Liste;
