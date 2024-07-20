import styles from '../../styles/login.module.css';

export default function LoginForm() {
  return (
    <form className={styles.form} action=''>
      <input type='text' placeholder='Enter your email' />
      <input type='password' placeholder='Enter your email' />
      <a href='/'>Forgot your password?</a>
      <button className={styles.button}>Enviar</button>
    </form>
  );
}
