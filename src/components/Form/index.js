import PropTypes from 'prop-types';
import './style.scss';

const Form = ({ inputText, onInputChange, onFormSubmit }) => (

  <form
    className="form"
    onSubmit={(evt) => {
      evt.preventDefault();
      onFormSubmit();
    }}
  >
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      required
      value={inputText}
      onChange={(evt) => {
        const text = evt.target.value;
        onInputChange(text);
      }}
    />
  </form>
);

Form.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
export default Form;
