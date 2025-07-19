import { Button, TextField } from '@suid/material';
import { body, form } from './index.module.css';

export type ContactFormProps = {
  onSubmit: (
    name: string,
    email: string,
    content: string,
  ) => void,
};

export function ContactForm(
  props: ContactFormProps,
) {
  function onSubmit(
    event: SubmitEvent & { currentTarget: HTMLFormElement, },
  ) {
    event.stopPropagation();
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = (form.get('name') || '') as string;
    const email = (form.get('email') || '') as string;
    const content = (form.get('content') || '') as string;
    props.onSubmit(name, email, content);
  }

  return (
    <form class={form} onSubmit={onSubmit}>
      <TextField
        variant="filled"
        name="name"
        label="Name"
        type="text"
        size="small"
        required
      />
      <TextField
        variant="filled"
        name="email"
        label="Email"
        type="email"
        size="small"
        required
      />
      <TextField
        variant="filled"
        name="content"
        label="Content"
        multiline
        type="text"
        rows={10}
        class={body}
        size="small"
        required
      />
      <Button
        variant="contained"
        component="input"
        type="submit"
        value="Send"
      />
    </form>
  );
}
