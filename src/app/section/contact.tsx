import { formContainer } from './contact.module.css';

export function ContactSection(prop: { email: string, }) {
  return (
    <form class={formContainer}>
      <input value={prop.email} disabled={true}></input>
      <input placeholder="Subject"></input>
      <textarea placeholder="..."></textarea>
      <button type="button">Contact</button>
    </form>
  );
}
