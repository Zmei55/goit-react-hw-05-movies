import { Form, Input, Button } from './SearchForm.styled';

export function SearchForm(params) {
  return (
    <Form>
      <Input type="text" />
      <Button type="submit">Искать</Button>
    </Form>
  );
}
