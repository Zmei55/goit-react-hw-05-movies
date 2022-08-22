import { Btn } from './Button.styled';

export function Button({ text, onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      {text}
    </Btn>
  );
}
