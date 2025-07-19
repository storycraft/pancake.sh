import { createTheme, ThemeProvider, Typography } from '@suid/material';
import { ContactForm } from '../../components/contact-form';

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

export function Contact(props: { email: string, }) {
  return (
    <ThemeProvider theme={contactTheme}>
      <Typography variant="h4" marginBottom="16px">
        Contact
      </Typography>
      <ContactForm
        onSubmit={(name, email, content) => {
          window.open(
            `mailto:${props.email}?cc=${encodeURIComponent(email)}&subject=${encodeURIComponent(name)}&body=${encodeURIComponent(content)}`,
          );
        }}
      />
    </ThemeProvider>
  );
}
