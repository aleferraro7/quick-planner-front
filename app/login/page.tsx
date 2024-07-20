import LoginForm from './login-form';
import styles from '../../styles/login.module.css';

export default function Login() {
  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <h2>Log In</h2>
        <h3>Enter your credentials</h3>
        <LoginForm />
      </div>
    </body>
  );
}
