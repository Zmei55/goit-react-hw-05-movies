import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({ text, onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
