import { Button, createTheme, TextField, ThemeProvider, Typography } from '@suid/material';
import { body, form } from './index.module.css';

const contactTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9575cd',
    },
    secondary: {
      main: '#7e57c2',
    },
  },
});

export function ContactForm(props: { email: string, }) {
  function onSubmit(
    event: SubmitEvent & { currentTarget: HTMLFormElement, },
  ) {
    event.stopPropagation();
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = (form.get('name') || '') as string;
    const email = (form.get('email') || '') as string;
    const content = (form.get('content') || '') as string;

    window.open(
      `mailto:${props.email}?cc=${encodeURIComponent(email)}&subject=${encodeURIComponent(name)}&body=${encodeURIComponent(content)}`,
    );
  }

  return (
    <ThemeProvider theme={contactTheme}>
      <Typography variant="h4" marginBottom="16px" sx={{ userSelect: 'none' }}>
        Contact
      </Typography>
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
    </ThemeProvider>
  );
}
